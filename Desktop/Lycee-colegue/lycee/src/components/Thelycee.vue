<template>


  <!--================Home Banner Area =================-->
  <section class="banner_area">
    <div class="banner_inner d-flex align-items-center">
      <div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="banner_content text-center">
              <h2>Nom de L'etablisement </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================End Home Banner Area =================-->

  <!--================ Start Course Details Area =================-->
  <section class="info section_gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 info-left">
          <div class="main_image">
            <img class="img-fluid" src="../assets/img/lycee1.jpg" alt="">
          </div>
          <div class="content_wrapper">
            <h4 class="title">Description du lycées</h4>
            <div class="content">
              Lorsque vous entrez dans un nouveau domaine de la science, vous vous trouvez presque toujours avec un
              Nouvelle langue déroutante de
              Termes techniques à apprendre avant de pouvoir converser avec les experts.C'est certainement
              vrai en astronomie à la fois dans
              termes des termes qui se réfèrent au cosmos et aux termes qui décrivent les outils du commerce,
              le plus répandu
              Être le télescope.
            </div>

            <h4 class="title">Historique</h4>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </div>

            <h4 class="title">Nos classes disponible :</h4>
            <div class="content">
              <ul class="course_list">
                <li class="justify-content-between d-flex">
                  <p>Classe 1</p>
                  <a class="primary-btn text-uppercase" href="#">Prendre un rendez-vous</a>
                </li>
                <li class="justify-content-between d-flex">
                  <p>Classe 2</p>
                  <a class="primary-btn text-uppercase" href="#">Prendre un rendez-vous</a>
                </li>
                <li class="justify-content-between d-flex">
                  <p>Classe 3</p>
                  <a class="primary-btn text-uppercase" href="#">Prendre un rendez-vous</a>
                </li>
                <li class="justify-content-between d-flex">
                  <p>Classe 4</p>
                  <a class="primary-btn text-uppercase" href="#">Prendre un rendez-vous</a>
                </li>
                <li class="justify-content-between d-flex">
                  <p>Classe 5</p>
                  <a class="primary-btn text-uppercase" href="#">Prendre un rendez-vous</a>
                </li>


              </ul>
            </div>
          </div>
        </div>


        <div class="col-lg-4 right-contents">
          <ul>
            <li>
              <a class="justify-content-between d-flex" href="#">
                <p>Nom du college/lycée </p>
                <span class="or">Lorem ipm</span>
              </a>
            </li>
            <li>
              <a class="justify-content-between d-flex" href="#">
                <p>Localisation </p>
                <span class="or">Lomé</span>
              </a>
            </li>
            <li>
              <a class="justify-content-between d-flex" href="#">
                <p>Année d'experienve </p>
                <span>5 ans </span>
              </a>
            </li>
            <li>
              <a class="justify-content-between d-flex" href="#">
                <p>nombre de filiaire </p>
                <span>5</span>
              </a>
            </li>
            <li>
              <a class="justify-content-between d-flex" href="#">
                <p>Heure de cours</p>
                <span>7h00 - 15h 00</span>
              </a>
            </li>
          </ul>
          <a href="#" class="primary-btn2 text-uppercase enroll rounded-0 text-white">Enroll the course</a>

          <h4 class="title">Nos series</h4>
          <div class="content">
            <div class="review-top row pt-40">
              <div class="col-lg-12">
                <div class="d-flex flex-row reviews justify-content-between">
                  <span>Serie A </span>
                  <div class="star">
                    <i class="ti-star checked"></i>
                    <i class="ti-star checked"></i>
                    <i class="ti-star checked"></i>
                    <i class="ti-star"></i>
                    <i class="ti-star"></i>
                  </div>
                  <span>3</span>
                </div>
                <div class="d-flex flex-row reviews justify-content-between">
                  <span>Series C</span>
                  <div class="star">
                    <i class="ti-star checked"></i>
                    <i class="ti-star checked"></i>
                    <i class="ti-star checked"></i>
                    <i class="ti-star"></i>
                    <i class="ti-star"></i>
                  </div>
                  <span>3</span>
                </div>
                <div class="d-flex flex-row reviews justify-content-between">
                  <span>Serie D</span>
                  <div class="star">
                    <i class="ti-star checked"></i>
                    <i class="ti-star checked"></i>
                    <i class="ti-star checked"></i>
                    <i class="ti-star"></i>
                    <i class="ti-star"></i>
                  </div>
                  <span>3</span>
                </div>
              </div>
            </div>
            <div class="feedeback">
              <h6>Votre message</h6>
              <textarea name="feedback" class="form-control" cols="10" rows="10"></textarea>
              <div class="mt-10 text-right">
                <a href="#" class="primary-btn2 text-right rounded-0 text-white">Submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<style>

.info .title {
  font-size: 21px;
  border: none;
  cursor: pointer;
  margin-top: 40px;
  border-bottom: 1px solid #eeeeee;
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 22px; }
  .info .title:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 1px;
    width: 74px;
    background: #fdc632; }

.info-left .course_list {
  margin-bottom: 0; }
  @media (max-width: 575px) {
    .info-left .course_list {
      padding-left: 0; } }
  .info-left .course_list li {
    list-style: none;
    margin-bottom: 20px; }
    .info-left .course_list li .primary-btn {
      background: #f9f9f9;
      color: #7b838a;
      box-shadow: none;
      font-size: 12px;
      border-radius: 0px; }
      .info-left .course_list li .primary-btn:hover {
        background: #fdc632;
        color: #ffffff; }
      @media (max-width: 575px) {
        .info-left .course_list li .primary-btn {
          min-width: 100px;
          font-size: 10px;
          padding: 0 10px; } }
    .info-left .course_list li:last-child {
      margin-bottom: 0; }

@media (max-width: 991px) {
  .right-contents {
    margin-top: 50px; } }
.right-contents ul {
  padding-left: 0; }
  .right-contents ul li {
    list-style: none;
    background: #f9f9f9;
    padding: 10px 22px;
    margin-bottom: 10px; }
    .right-contents ul li a {
      color: #7b838a;
      text-align: left; }
      .right-contents ul li a p {
        margin-bottom: 0px; }
    .right-contents ul li .or {
      color: #002347;
      font-weight: 500; }
.right-contents .enroll {
  margin-top: 10px;
  width: 100%; }
.right-contents .reviews span,
.right-contents .reviews .star {
  width: 31%;
  margin-bottom: 10px; }
.right-contents .avg-review {
  background: #04091e;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 20px 0px; }
  .right-contents .avg-review span {
    font-size: 18px;
    color: #fdc632; }
  @media (max-width: 991px) {
    .right-contents .avg-review {
      margin-bottom: 20px; } }
@media (max-width: 1024px) {
  .right-contents .single-reviews .thumb {
    margin-right: 10px; } }
.right-contents .single-reviews h5 {
  display: inline-flex; }
  @media (max-width: 1024px) {
    .right-contents .single-reviews h5 {
      display: block; } }
  .right-contents .single-reviews h5 .star {
    margin-left: 10px; }
    @media (max-width: 1024px) {
      .right-contents .single-reviews h5 .star {
        margin: 10px 0; } }
.right-contents .feedeback {
  margin-top: 30px; }
  .right-contents .feedeback textarea {
    resize: none;
    height: 130px;
    background: #f9f9ff; }
    .right-contents .feedeback textarea:focus {
      box-shadow: none; }
.right-contents .star .checked {
  color: #fdc632; }
.right-contents .comments-area {
  padding: 0;
  border: 0;
  background: transparent; }
  .right-contents .comments-area .star {
    margin-left: 20px; }


</style>