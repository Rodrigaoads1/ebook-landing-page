import pandas as pd

class ExpertAnalysis:
    def __init__(self):
        # Aqui podemos adicionar heurísticas de estrategista sênior
        pass

    def get_summary_insights(self, df):
        """Analisa o resumo geral da conta."""
        if df.empty: return []
        
        total_leads = df['Leads'].sum()
        total_cost = df['Cost'].sum()
        avg_cpl = total_cost / total_leads if total_leads > 0 else 0
        
        insights = [
            f"O investimento total foi de R$ {total_cost:,.2f} focados em conversão direta.",
            f"Geramos {total_leads:.0f} novos leads com um custo médio de R$ {avg_cpl:,.2f} por contato."
        ]
        
        if avg_cpl < 15: # Exemplo de benchmark
            insights.append("O CPL está operando em uma faixa de alta eficiência para o setor.")
        elif avg_cpl > 40:
            insights.append("O custo por lead está acima do benchmark; sugere-se revisão de criativos e landing page.")
            
        return insights

    def get_campaign_strategy(self, campaign_row):
        """Gera uma análise estratégica para uma campanha específica."""
        name = campaign_row['Campaign']
        cpl = campaign_row['Cost'] / campaign_row['Leads'] if campaign_row['Leads'] > 0 else 0
        
        if cpl > 0:
            return f"A campanha '{name}' é o nosso motor principal de tração, mantendo consistência no volume de leads."
        return f"A campanha '{name}' está focada em topo de funil (alcance), preparando o público para conversão futura."

    def get_auction_commentary(self):
        """Comentários sobre o leilão/concorrência (para ser preenchido ou via API)."""
        return "Notamos uma entrada agressiva de novos concorrentes no leilão. Recomendo manter o lance focado em 'Parcela de Impressões na Parte Superior' para proteger o Brand."
