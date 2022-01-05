# Calculadora de IMC
Um pequeno projeto de uma calculadora de imc feito em React. 
<h3>Imagem do projeto:</h3>
<img src="https://github.com/sian19/Calculo-de-IMC/blob/master/src/img/img-projeto.png">
<p>Aqui o usuário pode escolher o sexo(homem ou mulher) e em seguida escolhe também a idade, altura e peso digitando as mesmas nos campos, depois é só clicar em calcular que automaticamente, logo mais acima aparece o resultado do seu IMC.</p>
</br>
<h3>Oque foi usado no desenvolvimento da aplicação:</h3>
<ul>
  <li>Foi desenvolvido usando hooks para renderizar os componentes através de funções.</li>
  <li>O código foi desenvolvido seguindo as intruções do ministério da saúde, onde o resultado do IMC é de acordo com 
a idade, altura e peso.</li>
  <li>Os valores que o usuário digitam nos campos de input são passados por parâmetros para uma função que é responsável
por fazer o cálculo do imc.</li>
  <li>O resultado do IMC é colocado dentro de um estado que em seguida é exibido na tela do usuário.</li>
  <li>Foi criado um componente que dentro do mesmo há um bloco de código com diversas condições que tem o objetivo de
de direcionar o valor que o estado Imc(Criado com o objetivo de receber valores de acordo com o resultado do 
componente result) irá receber.</li>
  <li>Foi criado um estado chamado ImcColor com o objetivo de receber valores de cores('red', 'yellow' e 'green') de 
acordo com o valor do estado imc, o estado ImcColor é atribuido a um style(estilo) de color, para dessa forma 
trocar a cor do texto que está dentro do estado imc.Exêmplo se o texto for 'você está acima do peso', a cor dele será red(vermelho).</li>
  <li>O código também foi desenvolvido para que determinada idade tenha um resultado IMC diferente. Exemplo para um adulto o IMC ideal
é entre 18.5 a 25, agora para uma criança o IMC ideal seria entre 14.5 a 16.6.</li>
  <li>Foi criado um componente com o nome de sexo, onde dentro desse componente possui duas divs com o texto de homem e a
outra mulher, que servem como botões, que ao usuário clicar em um que está desmarcado esse mesmo automaticamnete ficará com a borda verde
e o outro ficara com a borda negra e fina. Para fazer esse efeito se criou o estado select que ao clicar em um determinado botão se muda o
o valor de select para false ou true, assim usando o useEffect e observando o valor do estado select se muda os valores dos estados borderH
e borderM, onde se o select estiver em false o valor de borderH será um e se for true o valor de borderH será outro, o mesmo ocorre 
com o estado borderM, onde o valor que será mudado desses estados será a borda verde que ficará em volta do botão que for clicado. </li>
</ul>

<h3>Link do projeto:</h3>
<a href="">Clique aqui</a>
