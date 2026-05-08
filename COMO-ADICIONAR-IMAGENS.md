# 📸 GUIA RÁPIDO: Adicionar Imagens ao Site

Olá Andressa! Vou tornar isso SUPER simples. Não precisa ser programadora!

---

## 🚀 PASSO 1: Preparar as Fotos

### 1.1 Tire fotos com seu smartphone
- Foto grande da fazenda (para ser banner no topo)
- Foto de gado/pasto
- Foto da equipe
- Logo da fazenda (se tiver - pode ser JPG ou PNG)

### 1.2 Redimensionar (deixar mais leve)
**Entre em: https://www.iloveimg.com/pt/redimensionar-imagem**

1. Clique em "Redimensionar Imagem"
2. Arraste sua foto lá
3. Escolha o tamanho: **800 x 600 pixels**
4. Clique em Download
5. Pronto! A foto está mais leve

**Por que?** Sites muito pesados carregam lento. 800x600 é ideal.

### 1.3 Nomear as fotos corretamente
Renomeie no seu computador:
- `logo-fazenda.png`
- `banner-hero.jpg`
- `foto-gado.jpg`
- `foto-equipe.jpg`

**⚠️ Importante:** Use hífen (-) no lugar de espaço. Ex: `foto-gado.jpg` (não `foto gado.jpg`)

---

## 🌐 PASSO 2: Subir as Fotos no GitHub

### 2.1 Faça login no GitHub
- Acesse: https://github.com
- Faça login com sua conta

### 2.2 Entre no seu repositório
- Clique em **"site-fazenda"** (seu repositório)

### 2.3 Vá até a pasta `images`
- Procure por **"images"** dentro do seu repositório
- Clique em **"images"**
- A pasta estará vazia (normal!)

### 2.4 Clique em "Add file"
- Veja o botão verde **"Add file"** (canto superior direito)
- Clique nele
- Selecione **"Upload files"**

### 2.5 Arraste suas fotos
- Na área que aparece, **arraste seus arquivos**
- Ou clique em **"choose your files"** e selecione
- Pode subir 1 ou todas de uma vez!

### 2.6 Faça commit (confirme)
- Escreva uma mensagem: `"Upload de imagens da fazenda"`
- Clique em **"Commit changes"** (botão verde)
- **Aguarde 1-2 minutos** - as fotos estarão lá!

---

## 📝 PASSO 3: Editar os Arquivos HTML

### 3.1 Entender a estrutura

Seu site tem esta pasta:
```
site-fazenda/
├── images/           ← Suas fotos vão AQUI
├── index.html        ← Página inicial
├── fazenda.html      
├── carreiras.html    
└── cadastro.html     
```

### 3.2 Adicionar LOGO (em todas as páginas)

**Onde editar:** Em cada arquivo HTML (index.html, fazenda.html, etc.)

**Como achar:**
Procure por esta linha:
```html
<div class="logo">3M Agropecuária</div>
```

**O que fazer:**
Substitua aquela linha por:
```html
<div class="logo">
    <img src="images/logo-fazenda.png" alt="Logo 3M Agropecuária" style="height: 50px; width: auto;">
</div>
```

**Pronto!** A logo aparecerá no canto superior de todas as páginas.

### 3.3 Adicionar BANNER HERO (foto grande - Página Inicial)

**Onde editar:** No arquivo `css/style.css`

**Como achar:**
Procure por:
```css
.hero {
    height: 100vh;
    background: linear-gradient(135deg, var(--verde-escuro) 0%, var(--verde-principal) 100%);
```

**O que fazer:**
Substitua aquela linha por:
```css
.hero {
    height: 100vh;
    background: linear-gradient(135deg, rgba(45, 80, 22, 0.6) 0%, rgba(45, 80, 22, 0.6) 100%), url('images/banner-hero.jpg') center/cover no-repeat;
```

**O que muda?**
- A imagem `banner-hero.jpg` fica de fundo
- Tem uma camada escura por cima para o texto ficar legível
- A imagem cobre toda a tela

### 3.4 Adicionar FOTO na Seção "Quem Somos" (Página Inicial)

**Onde editar:** `index.html`

**Como achar:**
Procure por:
```html
<div class="placeholder-img">
    <p>📷 Insira aqui uma foto da fazenda</p>
</div>
```

**O que fazer:**
Substitua tudo aquilo por:
```html
<img src="images/foto-gado.jpg" alt="Rebanho 3M Agropecuária" style="width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
```

**Resultado:**
Uma foto bonita aparecerá na seção "Quem Somos" com borda arredondada e sombra.

---

## ✏️ COMO EDITAR OS ARQUIVOS HTML NO GITHUB

### Opção A: Editar Direto no GitHub (Mais Fácil)

1. Abra seu repositório
2. Clique no arquivo `index.html`
3. Clique no ícone de **lápis** (Edit) no canto superior direito
4. **Procure a linha** que você quer editar
5. **Copie e cole** o código novo que te mostrei
6. Clique em **"Commit changes"** (abaixo)
7. Aguarde 1-2 minutos
8. **Pronto!** O site está atualizado

### Opção B: Editar no Computador (Se preferir)

1. Faça download do repositório como ZIP
2. Abra em um editor (Bloco de Notas, VS Code, etc.)
3. Edite os arquivos
4. Faça upload de volta no GitHub

---

## 🎯 CHECKLIST DE EDIÇÃO

Marque conforme vai fazendo:

- [ ] **Foto 1:** Adicionei logo em `index.html`
- [ ] **Foto 2:** Adicionei logo em `fazenda.html`
- [ ] **Foto 3:** Adicionei logo em `carreiras.html`
- [ ] **Foto 4:** Adicionei logo em `cadastro.html`
- [ ] **Foto 5:** Editar `css/style.css` para adicionar banner hero
- [ ] **Foto 6:** Editar `index.html` para adicionar foto "Quem Somos"
- [ ] **Teste:** Acessei meu site e vi as fotos aparecer ✅

---

## 🔧 ARQUIVOS PARA EDITAR (RESUMO)

### Arquivo: `index.html`

**Buscar 1:**
```html
<div class="logo">3M Agropecuária</div>
```
**Substituir por:**
```html
<div class="logo">
    <img src="images/logo-fazenda.png" alt="Logo 3M Agropecuária" style="height: 50px; width: auto;">
</div>
```

**Buscar 2:**
```html
<div class="placeholder-img">
    <p>📷 Insira aqui uma foto da fazenda</p>
</div>
```
**Substituir por:**
```html
<img src="images/foto-gado.jpg" alt="Rebanho 3M Agropecuária" style="width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
```

---

### Arquivo: `fazenda.html`

**Buscar:**
```html
<div class="logo">3M Agropecuária</div>
```
**Substituir por:**
```html
<div class="logo">
    <img src="images/logo-fazenda.png" alt="Logo 3M Agropecuária" style="height: 50px; width: auto;">
</div>
```

---

### Arquivo: `carreiras.html`

**Buscar:**
```html
<div class="logo">3M Agropecuária</div>
```
**Substituir por:**
```html
<div class="logo">
    <img src="images/logo-fazenda.png" alt="Logo 3M Agropecuária" style="height: 50px; width: auto;">
</div>
```

---

### Arquivo: `cadastro.html`

**Buscar:**
```html
<div class="logo">3M Agropecuária</div>
```
**Substituir por:**
```html
<div class="logo">
    <img src="images/logo-fazenda.png" alt="Logo 3M Agropecuária" style="height: 50px; width: auto;">
</div>
```

---

### Arquivo: `css/style.css`

**Buscar:**
```css
.hero {
    height: 100vh;
    background: linear-gradient(135deg, var(--verde-escuro) 0%, var(--verde-principal) 100%);
```

**Substituir por:**
```css
.hero {
    height: 100vh;
    background: linear-gradient(135deg, rgba(45, 80, 22, 0.6) 0%, rgba(45, 80, 22, 0.6) 100%), url('images/banner-hero.jpg') center/cover no-repeat;
```

---

## ❓ DÚVIDAS FREQUENTES

**P: As imagens não aparecem?**
R: 
1. Aguarde 2-3 minutos após fazer upload
2. Verifique se o caminho está correto: `images/nome-da-foto.jpg`
3. Limpe o cache: Ctrl+Shift+Delete (no navegador)
4. Certifique-se que a imagem está mesmo na pasta `images/`

**P: Qual tamanho mínimo da imagem?**
R: Mínimo 600 pixels de largura. Recomendo 800x600 ou 1200x800.

**P: Qual formato usar?**
R: 
- **JPG** = para fotos (mais leve) ✅ Use este
- **PNG** = para logo com fundo transparente

**P: Posso usar muitas imagens?**
R: Sim! Mas lembre-se que redimensionar deixa mais leve. Máximo 5-10 MB total.

**P: Preciso saber programação?**
R: NÃO! É só copiar e colar. Nenhuma programação necessária!

---

## 🚀 RESUMO DO PROCESSO

1. **Tire fotos** 📸
2. **Redimensione** (iloveimg.com) 📐
3. **Suba no GitHub** em `images/` 🚀
4. **Edite os HTML** (copiar/colar) 💻
5. **Veja funcionando** ✅

**Tempo total: ~30 minutos**

---

## 📞 Me Pergunte!

Qualquer dúvida:
- "Claude, como faço para adicionar mais fotos?"
- "Não estou achando o lugar para editar"
- "A imagem apareceu muito grande/pequena"
- "Quero trocar a cor do fundo"

**Estou aqui para ajudar!** 🙌

---

**Boa sorte! Seu site vai ficar INCRÍVEL com as fotos! 🌾🐄**
