# ✅ CHECKLIST RÁPIDO: Adicionar Imagens

Andressa, vou fazer super simples. Siga este checklist:

---

## 📸 PARTE 1: PREPARAR FOTOS (10 minutos)

- [ ] Tire fotos da fazenda com seu celular:
  - Uma foto grande da fazenda (panorâmica)
  - Foto do gado/pasto
  - Foto da equipe
  - Logo (se tiver - pode ser JPG ou PNG)

- [ ] **Redimensione as fotos** (deixar mais leve):
  1. Abra https://www.iloveimg.com/pt/redimensionar-imagem
  2. Clique em "Redimensionar Imagem"
  3. Arraste sua foto
  4. Escolha: 800 x 600 pixels
  5. Clique em Download
  
- [ ] **Renomeie os arquivos** (sem espaço, com hífen):
  - `logo-fazenda.png`
  - `banner-hero.jpg`
  - `foto-gado.jpg`
  - `foto-equipe.jpg`

---

## 🌐 PARTE 2: SUBIR NO GITHUB (5 minutos)

- [ ] Acesse https://github.com e faça login

- [ ] Clique no seu repositório **"site-fazenda"**

- [ ] Clique na pasta **"images"** (está vazia)

- [ ] Clique no botão verde **"Add file"** → **"Upload files"**

- [ ] **Arraste suas fotos** lá (ou clique "choose your files")

- [ ] Escreva uma mensagem: "Upload de imagens da fazenda"

- [ ] Clique em **"Commit changes"** (botão verde)

- [ ] **Aguarde 1-2 minutos** ⏳ (as fotos estarão lá!)

✅ Pronto! As fotos estão no servidor.

---

## 📝 PARTE 3: EDITAR OS ARQUIVOS HTML (15 minutos)

### Passo 1: Adicionar LOGO em todas as 4 páginas

Você vai editar 4 arquivos: `index.html`, `fazenda.html`, `carreiras.html`, `cadastro.html`

**Em cada arquivo:**

1. No GitHub, clique no arquivo HTML (ex: `index.html`)
2. Clique no **lápis** ✏️ (Edit) no canto superior direito
3. **Procure esta linha:**
```html
<div class="logo">3M Agropecuária</div>
```
4. **Substitua por:**
```html
<div class="logo">
    <img src="images/logo-fazenda.png" alt="Logo 3M Agropecuária" style="height: 50px; width: auto;">
</div>
```
5. Clique em **"Commit changes"** (botão verde, abaixo)
6. Repita para os outros 3 arquivos

### Passo 2: Adicionar BANNER HERO (foto grande)

1. No GitHub, clique no arquivo **`css/style.css`**
2. Clique no **lápis** ✏️ (Edit)
3. **Procure estas linhas:**
```css
.hero {
    height: 100vh;
    background: linear-gradient(135deg, var(--verde-escuro) 0%, var(--verde-principal) 100%);
```
4. **Substitua por:**
```css
.hero {
    height: 100vh;
    background: linear-gradient(135deg, rgba(45, 80, 22, 0.6) 0%, rgba(45, 80, 22, 0.6) 100%), url('images/banner-hero.jpg') center/cover no-repeat;
```
5. Clique em **"Commit changes"**

✅ Agora a foto grande aparece como fundo!

### Passo 3: Adicionar FOTO na seção Quem Somos

1. No GitHub, clique no arquivo **`index.html`**
2. Clique no **lápis** ✏️ (Edit)
3. **Procure esta linha:**
```html
<div class="placeholder-img">
    <p>📷 Insira aqui uma foto da fazenda</p>
</div>
```
4. **Substitua por:**
```html
<img src="images/foto-gado.jpg" alt="Rebanho 3M Agropecuária" style="width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
```
5. Clique em **"Commit changes"**

✅ A foto aparece na seção "Quem Somos"!

---

## 🧪 PARTE 4: TESTAR (3 minutos)

- [ ] Acesse seu site: `https://seu-usuario.github.io/site-fazenda/`

- [ ] Verifique se:
  - ✅ Logo aparece no canto superior (em todas as páginas)
  - ✅ Foto grande aparece no topo da página inicial
  - ✅ Foto da seção "Quem Somos" aparece
  - ✅ Tudo fica bonito no celular (aperte F12 e vire para modo mobile)

- [ ] Se a foto não apareceu:
  1. Aguarde 2-3 minutos (GitHub às vezes demora)
  2. Limpe o cache: Ctrl+Shift+Delete
  3. Recarregue a página: Ctrl+F5
  4. Verifique se o caminho está correto no código: `images/nome-da-foto.jpg`

---

## 🎯 RESUMO

**Tempo total: ~30 minutos**

```
1. Tire fotos (5-10 min)
   ↓
2. Redimensione (5 min)
   ↓
3. Suba no GitHub (5 min)
   ↓
4. Edite os HTMLs (10-15 min)
   ↓
5. Teste no navegador (3 min)
   ↓
✅ PRONTO! Site com fotos!
```

---

## ❓ DÚVIDAS RÁPIDAS

**P: Qual tamanho mínimo de foto?**
R: 600 pixels de largura. Recomendo 800x600 ou 1200x800.

**P: JPG ou PNG?**
R: JPG = para fotos (mais leve). PNG = para logo.

**P: A foto fica muito grande/pequena?**
R: Edite o `style="width: 100%; ..."` no HTML. Mude `100%` para `80%` ou `60%` conforme preferir.

**P: Preciso saber programação?**
R: NÃO! É só copiar e colar código. Zero programação.

**P: E se eu errar?**
R: Sem problema! Clique no lápis de novo e corrija. GitHub guarda o histórico.

---

## 📚 ARQUIVOS QUE TEM NO ZIP

```
📄 COMO-ADICIONAR-IMAGENS.md    ← Leia este! (versão detalhada)
📄 GUIA-IMAGENS.html            ← Abra no navegador (visual)
📄 Este arquivo aqui             ← Checklist rápido
📄 README.md                     ← Como publicar no GitHub
```

---

## 🚀 PRÓXIMO PASSO

Depois que as imagens estiverem funcionando, você pode:

✨ **Adicionar mais fotos** nas outras seções do site  
✨ **Integrar o Google Forms** para o formulário de currículos  
✨ **Compartilhar o link** com a equipe  
✨ **Montar um domínio próprio** (fazenda3m.com.br)

Mas por enquanto, **foco nas imagens!** 📸

---

## 💬 ME PERGUNTE!

Qualquer dúvida:
- "Como faço para adicionar mais fotos?"
- "A imagem não está aparecendo"
- "Como deixar a imagem maior/menor?"
- "Posso usar outras fotos?"

**Estou aqui para ajudar!** 🙌

---

**Boa sorte! Seu site vai ficar INCRÍVEL com as fotos! 🌾🐄**

*Versão: Maio 2026*
