# PRD - Jogo casual de associação de palavras

**Status:** rascunho para validação  
**Plataforma inicial:** Web App responsivo  
**Idioma inicial:** português do Brasil

## 1. Visão do produto

Criar um jogo de palavras gratuito, acessível pelo navegador, que ofereça um desafio diário curto e relaxante, mas estimulante. Em cada painel, a pessoa identifica relações ocultas entre termos e compartilha o resultado sem revelar as respostas.

O jogo deve funcionar sem cadastro. Uma conta opcional poderá sincronizar o progresso entre dispositivos em uma etapa posterior.

## 2. Público e necessidade

O público inclui adultos, jovens, estudantes e entusiastas de quebra-cabeças casuais. A experiência deve servir tanto a quem quer uma pausa rápida quanto a quem gosta de discutir associações e comparar soluções com outras pessoas.

**Necessidade principal:** ter um desafio diário fácil de acessar, sem cronômetro ou pressão, com regras compreensíveis e uma resolução que possa ser compartilhada.

## 3. Objetivos e fora de escopo

### Objetivos

- Permitir iniciar uma partida diretamente por um link, em celular ou computador.
- Oferecer um painel diário comum a todos os jogadores e partidas de prática ilimitadas.
- Tornar a associação de palavras o núcleo da experiência e apresentar dicas graduais.
- Registrar estatísticas e sequência diária localmente, sem exigir conta.
- Facilitar compartilhamento sem spoilers e desafios assíncronos por link.
- Atingir retenção D7 acima de 25% e acompanhar o volume de compartilhamentos.

### Fora do MVP

- Partidas simultâneas, chat e ranking competitivo.
- Conta obrigatória ou sincronização entre dispositivos.
- Gírias regionais, flexões complexas e nomes próprios no vocabulário principal.
- Monetização que dê vantagem de jogo a quem paga.

## 4. Hipótese de mecânica do MVP

A proposta inicial é um painel com **16 termos, organizados editorialmente em quatro grupos de quatro**. A pessoa seleciona quatro termos por vez e envia a combinação. O painel termina quando os quatro grupos forem resolvidos ou quando o limite de erros for atingido.

- Um grupo correto é confirmado e deixa de aceitar novas seleções.
- Uma combinação incorreta consome uma tentativa de erro.
- Uma combinação com três termos do mesmo grupo pode receber feedback de “quase”, sem revelar a resposta. A regra exata de feedback deve ser consistente em todos os painéis.
- O limite de erros será configurável entre quatro e seis por painel; o valor padrão ainda precisa ser definido.
- Não há cronômetro. A pessoa pode sair e voltar sem perder a partida.
- A dimensão semântica será inicialmente criada e revisada por editores: relações de significado, associação cultural ou categoria comum, com distratores plausíveis. Não haverá geração automática de respostas no MVP.
- Após resolver ou perder, o jogo revela os grupos e uma explicação breve da relação de cada grupo.

**Hipótese a validar:** neste primeiro formato, “proximidade de significado” aparece na construção de grupos e distratores e no feedback de quase acerto. Não será um ranking numérico de proximidade entre palavras. Se a intenção for que cada tentativa receba uma distância semântica mensurável, será necessária outra mecânica e outro modelo de conteúdo.

## 5. Modos e fluxos

### Desafio diário

1. A pessoa abre o link e recebe o painel do dia, com instruções curtas disponíveis.
2. Seleciona termos e envia grupos até completar o painel, esgotar os erros ou pausar.
3. Ao concluir, vê o resultado, as explicações e a ação para compartilhar.
4. O painel muda à meia-noite no horário oficial definido para o Brasil. A implementação deve usar a zona `America/Sao_Paulo`, não depender do relógio local do dispositivo.

### Prática

- Permite jogar painéis anteriores sem limite de partidas.
- O catálogo gratuito e o que significa “histórico completo” no Premium ainda precisam ser definidos, para que a prática gratuita não contradiga o desbloqueio Premium.
- A prática não altera a sequência nem as estatísticas do desafio diário, mas pode ter estatísticas próprias.

### Desafio por link

- Uma pessoa cria ou escolhe um painel e compartilha um link para outra pessoa resolver o mesmo conteúdo.
- O link abre diretamente o desafio, sem exigir conta.
- O MVP precisa decidir se o criador escolhe um painel existente ou monta uma combinação própria. Conteúdo criado por usuários exigiria regras de publicação, moderação e prevenção de spoilers; a recomendação inicial é compartilhar painéis existentes.

## 6. Conteúdo e idioma

- Vocabulário em português brasileiro, com substantivos e adjetivos de uso corrente e verbos no infinitivo.
- Excluir nomes próprios. Aceitar estrangeirismos apenas quando incorporados ao português corrente e validados editorialmente.
- Excluir gírias regionais e flexões complexas do modo principal.
- Cada painel deve ter solução única, relações explicáveis e revisão contra ambiguidades involuntárias.
- A experiência deve permitir selecionar termos por toque ou teclado. Se houver entrada textual, a comparação deve aceitar formas com e sem acento conforme a regra final de normalização; essa regra precisa ser testada contra colisões entre palavras distintas.
- Letras repetidas são permitidas quando fizerem parte de um termo.

## 7. Dicas e dificuldade

- Dicas progressivas podem revelar o nome de uma categoria ou fixar um termo correto.
- A dica será oferecida após erros consecutivos, com regra de disparo configurável.
- É preciso decidir se a dica é automática ou opcional, quantas podem ser usadas e se consumir uma dica afeta a pontuação ou o compartilhamento.
- Recomenda-se manter a mesma solução em todos os níveis de dificuldade do painel diário; variações devem ser apenas de assistência, para preservar a comparação social.

## 8. Progresso e armazenamento

- Salvar no navegador a partida em andamento, resultados diários, vitórias, derrotas, distribuição de resultados e sequência de dias.
- Exibir histórico simples de vitórias e derrotas e estatísticas do desafio diário.
- O usuário deve poder continuar após fechar ou atualizar a página.
- Sem login obrigatório. Uma futura sincronização por login social será opt-in.
- Limpar dados do navegador pode apagar o progresso local; comunicar isso com clareza antes de oferecer uma ação de limpeza.

## 9. Compartilhamento

- Gerar um resumo compacto com símbolos geométricos e cores, sem palavras-resposta nem grupos revelados.
- O resultado compartilhado deve identificar o número/data do painel, vitórias ou derrota e, se aplicável, o padrão de tentativas.
- Disponibilizar copiar resultado e usar a folha de compartilhamento do dispositivo quando disponível.
- Incluir alternativa textual acessível; cor não pode ser o único meio de representar acerto, erro ou dica.
- Não copiar nome, identidade visual, textos ou conjunto de painéis de jogos existentes; criar marca e conteúdo próprios.

## 10. Monetização

- Gratuito para jogar, com banners discretos fora da área de seleção e envio de termos.
- Não exibir anúncio intersticial durante uma partida nem interromper a resolução.
- Compra única opcional Premium para remover anúncios e desbloquear o histórico completo de painéis diários.
- A compra não concede tentativas extras, dicas exclusivas ou vantagem competitiva.
- Definir como restaurar compras e como reconhecer o Premium em navegação anônima ou em outro dispositivo; sem conta, a compra pode não acompanhar a pessoa entre navegadores.

## 11. Acessibilidade e requisitos de qualidade

- Suporte integral a teclado para navegar, selecionar, remover seleção, enviar combinação e acessar instruções.
- Alto contraste e símbolos/formas além das cores para distinguir estados.
- Foco visível, alvos adequados a toque, texto legível e rótulos compreensíveis por leitor de tela.
- Não depender de animações, áudio ou temporizadores para transmitir informação essencial.
- Layout responsivo para telas pequenas e grandes; ações principais utilizáveis sem rolagem excessiva em celular.
- Persistir o estado local de modo confiável e impedir que atualizações do painel diário apaguem partidas anteriores incompletas.

## 12. Métricas

**Métrica principal:** retenção D7 acima de 25%, definida como a proporção de jogadores que voltam e jogam no sétimo dia após a primeira partida. Como o MVP não exige conta e depende de armazenamento local, a medição será aproximada: limpar dados, trocar navegador ou dispositivo pode fragmentar o mesmo jogador.

**Indicadores complementares:**

- Compartilhamentos iniciados por painel concluído e por jogador ativo.
- Taxa de conclusão e taxa de derrota do desafio diário.
- Retorno ao desafio diário e uso da prática.
- Uso de dicas, abandono antes da primeira tentativa e partidas retomadas.
- Erros reportados ou palavras contestadas por painel.

Instrumentação deve coletar apenas o necessário e informar a pessoa sobre análise de uso quando aplicável.

## 13. Escopo recomendado do MVP

1. Painel diário editorial, quatro grupos e regra de erros configurável.
2. Interface responsiva, entrada por toque e teclado, feedback acessível e dicas.
3. Salvamento local de partida, sequência e estatísticas.
4. Compartilhamento sem spoiler.
5. Prática com um catálogo gratuito limitado, deixando a política de arquivo configurável.
6. Desafio por link de painel existente, se houver um serviço simples para emitir e resolver identificadores de painel; sem conta.
7. Banners e Premium podem entrar após validar a experiência principal, evitando que monetização atrase o teste de retenção.

## 14. Decisões pendentes

- O painel de 16 termos e quatro grupos representa a experiência desejada?
- “Proximidade semântica” deve ser apenas uma qualidade editorial dos grupos ou uma pista explícita calculada para cada tentativa?
- O limite padrão será quatro, cinco ou seis erros? Quando uma combinação conta como erro?
- Como funciona exatamente o quase acerto e qual feedback recebe uma combinação com dois termos relacionados?
- Quando e quantas vezes as dicas aparecem? O jogador pode recusá-las?
- Qual parte do arquivo fica disponível gratuitamente e por quanto tempo?
- Desafios por link usam painéis existentes ou permitem conteúdo criado pelo usuário?
- “Sem ou com acento” significa remover todos os diacríticos, inclusive cedilha, ou apenas aceitar ausência de acentos gráficos? A normalização completa pode equiparar palavras diferentes.
- A referência a BRT significa UTC−03:00 fixo ou a zona civil `America/Sao_Paulo` caso regras oficiais mudem?
- Como o Premium é restaurado sem conta e em qual plataforma a compra será oferecida?
- Qual será a meta numérica de compartilhamentos e como distinguir compartilhamento iniciado de compartilhamento efetivamente publicado?

## Referências de produto e acessibilidade

- [Termo](https://term.ooo/) — referência em português para desafio diário, acentos e letras repetidas.
- [Wordle](https://www.nytimes.com/games/wordle/index.html) e [Connections](https://www.nytimes.com/games/connections) — referências de jogos diários e compartilhamento de quebra-cabeças.
- [WCAG 2.2: uso de cor](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html), [teclado](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) e [tamanho mínimo de alvos](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) — critérios de acessibilidade web.
- [Apple Human Interface Guidelines: acessibilidade](https://developer.apple.com/design/human-interface-guidelines/accessibility) — recomendações complementares para estados, personalização e acesso inclusivo.
