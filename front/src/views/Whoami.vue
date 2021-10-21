<template>
   
<div class="whoami">
<div class="banner"><h1>Qui suis-je?</h1></div>
<div class="text">
Je me présente, Arnaud Bascou, 37 ans. Après une reconversion professionnelle, j'ai monté ce projet de consultant web/organisation
à destination de l'économie sociale et solidaire. Après 13 ans de vie professionnelle j'étais fier d'avoir acquis une grande expertise 
dans différents domaines. Cependant, il me manquait des choses importantes: les valeurs, le plaisir du travail accompli, 
le fait que mon travail fasse bouger les choses. 
<br><br>
Au-delà de l'expérience, ce qui garantit le bon déroulement d'un projet, ce sont les valeurs portées par celui qui l'entreprend. 
Durant mes expériences professionnelles j'ai pu le constater à de multiples reprises. Face à chaque projet je me présente avec
les leçons apprises de tous les précédents. Je m'enrichis et ce faisant, j'enrichis mon travail. <br>
Je vis avec passion et je mets toute ma passion dans mes projets, qu'ils soient personnels ou professionnels. Cette passion
permet de se plonger intégralement dans des sujets nouveaux, d'en acquérir l'expertise et d'en ressortir avec les solutions
attendues.

</div>


<div class="containerWho">
  <div class="card">
    <h3 class="title">Expérimenté</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      Des expériences variées et enrichissantes.
    </div>
  </div>
  <div class="card">
    <h3 class="title">Investi</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      Je prends à cœur mes missions et ne laisse pas de problèmes sans solutions.
    </div>
  </div>
  <div class="card">
    <h3 class="title">Passionné</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      Celui qui travaille avec passion ne travaillera plus un seul jour de sa vie.
    </div>
  </div>
  <div class="card">
    <h3 class="title">Endurant</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      Quelle que soit leurs tailles ou leurs durées, je finis mes projets et j'atteins mes objectifs.
    </div>
  </div>
</div>
  
   
</div>   
    
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style lang="scss">
.whoami{
  height: 1000px;
  padding-top: 5em;
  padding-bottom: 2em;
}

.text {
  font-size: 1em;
  margin-left: 10%;
  margin-right: 10%;
}

.containerWho {
  padding-top: 2em;
  margin: 0 auto;
  position: static;
  height: 300px;
  width: 600px;
  top: 60px;
  left: calc(50% - 300px);
  display: flex;
}

.card {
  display: flex;
  height: 280px;
  width: 200px;
  background-color: #3C4B65;
  border-radius: 10px;
  box-shadow: 0rem 0 1rem rgb(100, 121, 160);
/*   margin-left: -50px; */
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
}

.card:not(:first-child) {
    margin-left: -50px;
}

.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.card:hover ~ .card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}

.title {
  color: white;
  font-weight: 300;
  position: absolute;
  left: 20px;
  top: 15px;
}

.bar {
  position: absolute;
  top: 100px;
  left: 20px;
  height: 5px;
  width: 150px;
}

.emptybar {
  background-color: #3C4B65;
  width: 100%;
  height: 100%;
}

.filledbar {
  position: absolute;
  top: 0px;
  z-index: 3;
  width: 0px;
  height: 100%;
  background: rgb(60,75,101,40);
  background: linear-gradient(90deg, rgba(60,75,101,40) 0%, rgba(101,126,171,67) 65%, rgba(131,164,222,87) 100%);
  transition: 0.6s ease-out;
}

.card:hover .filledbar {
  width: 150px;
  transition: 0.4s ease-out;
}

.circle {
  color: white;
  position: absolute;
  top: 150px;
  left: calc(50% - 60px);
}

.stroke {
  stroke: white;
  stroke-dasharray: 360;
  stroke-dashoffset: 360;
  transition: 0.6s ease-out;
}

svg {
  fill: #3C4B65;
  stroke-width: 2px;
}

.card:hover .stroke {
  stroke-dashoffset: 100;
  transition: 0.6s ease-out;
}

</style>