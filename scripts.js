const rueda = {
	id: document.getElementById("rueda"),
}

let t = 1000;

let contador = 0;

function $iniciar(){
	if (contador == 0) {
		const acelerar = rueda.id.animate([
			{transform: "rotate(360deg)"}
			],{
			easing: "ease-in",
			iterations: 1,
			duration: t
			}
		);
		return $girar();
	}
	else if (contador == 1) {
		rueda.id.style.animationIterationCount = `1`;
		const desacelerar = rueda.id.animate([
			{transform: "rotate(360deg)"}
			],{
			easing: "ease-out",
			iterations: 1,
			duration: t * 1.5
			}
		);
		contador = 0;
	}
	function $girar(){
		setTimeout(()=>{
			rueda.id.style.animationIterationCount = `infinite`;
			rueda.id.style.animationDuration = `${t / 1500}s`;
		}, t)
		contador = 1;
	}
}

rueda.id.addEventListener("click", $iniciar);