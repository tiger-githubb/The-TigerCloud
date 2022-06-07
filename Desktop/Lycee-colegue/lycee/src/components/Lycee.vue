<template>

<!-- Section de présentation des universités-->  
            <div class="container">
                <div class="row p-5">
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left align-self-center">
                            <h1 class="h1 text-success"> Trouvez une meilleure <b> écoles </b> </h1>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button href="#" class="btn btn-primary" type="submit"> Voir les écoles </button>
                        </div>
                    </div>

                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img  class="img-fluid" src="../assets/img/hero1.jpg" alt="" style="border-radius:30% 15%  ">
                    </div>
                </div>
            </div>
<!--Fin de la section de présentation des universités -->

<!-- Liste des universités -->
<section >
            
    <div class="container py-5">
        <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">les lycees </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/lycee1.jpg" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark">Lycee </a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span> <br/> <br/>
                        <a href="#" class="btn btn-primary">Lire Plus</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/lycee2.jpg" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark">lycee 2</a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span> <br/> <br/>
                        <a href="#" class="btn btn-primary">Lire Plus</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
                <div class="card h-100">
                    <a href="#">
                        <img src="../assets/img/lycee3.jpg"  class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <a href="#" class="h2 text-decoration-none text-dark"> lycee 3</a>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                        </p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span> <br/> <br/>
                        <a href="#" class="btn btn-primary">Lire Plus</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  <!-- Fin de la liste des universités -->

<!-- Section des catégories des univesités -->


</template>

<script>
    export default{
        name:"Lycee"
    };
</script>

<style>
/*Section de présentation des universités*/
    
/*Fin de la Section de présentation des universités*/


/* Liste des universités*/
.fa {
  font-size: 25px;
}

.checked {
  color: orange;
}

/*Fin de la liste des universités*/


/*  Section des catégories des univesités */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
/*  Section des catégories des univesités */
</style>