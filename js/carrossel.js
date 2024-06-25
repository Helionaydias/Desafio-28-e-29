var wall_index = 1;
show_walls(wall_index);
// trocar as imagens do carrossel
function plus_walls(n) {
  show_walls((wall_index += n));
}
//ajustar a posição do carrossel e marcar a bolinha correspondente ao carrossel
function current_walls(n) {
  show_walls((wall_index = n));
}
// fazer as imagens aparecer e desaparecer
function show_walls(n) {
  //variáveis temporárias
  //contador
  let i;
  //pegar as walls e dots e guardar em uma lista
  let walls = document.getElementsByClassName('wall');
  let dots = document.getElementsByClassName('dot');

  // criar uma verificação
  //quando o numero do meu index > 3  que walls vai voltar pra primeira imagem
  if (n > walls.length) {
    wall_index = 1;
  }
  //indice menor que 1 ,clicar na imagem para voltar
  if (n < 1) {
    wall_index = walls.length;
  }

  for (i = 0; i < walls.length; i++) {
    walls[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  walls[wall_index - 1].style.display = 'block';
  dots[wall_index - 1].className += ' active';
}
