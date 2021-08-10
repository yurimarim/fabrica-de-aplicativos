// onload
// caso usar o alert fora do onload existe o risco de antes 
// de carregar página receber o alert, caso estiver dentro
// do body, vai carregar e vai mandar o alert
// < body onload = "carregou()" > 
function carregou() {
    alert('Página foi carregada.')
}