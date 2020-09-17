<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lampa</title>
    
    <style>
    
    img {
    	position: static;
    	position: relative;
    	left: 100px;
    	bottom: 50px;
    	transform: translate(200px,400px);
        width: 45%;
    	
    }
    .modal {
        position: fixed;
        left: 25%;
        top: 50%;
        /* transform: translate(-50%,-50%); */
        /* width: 45%; */
        border: 2px solid rgba(170,170,170, 0.8);
        padding: 30px;
        display: none;
    }
    .open, .close {
        background-color: lightpink;
        border: none;
        border-radius:3px;
        cursor: pointer;
        padding: 7px;
        margin: 30px;
    }
    .close {
        margin-top:15px;
        float: right;
    }
    
    hr {
        margin: 15px 0;
    }
    * {
        margin:0;
        padding:0;
    }
    
    </style>
</head>
<body>
    
    <img style="display:block" class="vykl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSC-byKxz9y4DGoRzXEeip4I9adrGUR5J-haA&usqp=CAU" alt="">
    <img style="display:none" class="vkl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-u90_CWnUYxXjjGW1t8EAU4eWvc1o4xRFnQ&usqp=CAU" alt="">

    <input checked class="vykl" onclick="switchLamp(this)" type="radio" name="RadioChoice" title="ВЫКЛ">
    <input class="vkl" onclick="switchLamp(this)" type="radio" name="RadioChoice" title="ВКЛ">
    <input onclick="switchLamp(this)" type="radio" name="RadioChoice" title="reserve">
    
    
    <input style="display:block" type="text" class="header-input">
    <textarea name="" id="" cols="30" rows="10" class="text-input"></textarea>
    
    <button class="open" onclick="modWinOpen(this)">Открыть</button>
    
    
    <div class="modal" style="display:none">
        
    <h1>Заголовок</h1>
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nam, tempore, maxime modi repudiandae eaque laudantium in praesentium inventore voluptas labore natus nihil possimus! Tempore, repellat, tempora magni inventore laudantium cum rerum fuga cumque eius delectus quo ab excepturi eos ducimus accusantium provident adipisci assumenda quis itaque doloremque? Similique, animi velit inventore molestias praesentium earum. Repudiandae, nesciunt cupiditate quas non modi ea sunt corporis ipsam reprehenderit expedita ratione eaque quis similique sit incidunt voluptatibus ex quidem beatae aspernatur alias pariatur porro repellendus esse odio ipsum inventore quibusdam velit nulla deleniti accusantium. Sunt, rem consectetur fugit voluptatem saepe eos laboriosam modi.</span>
    <button class="close" onclick=modWinClose(this) >Закрыть</button>
    
    </div>
    
    
    
<!--<div class="modal" tabindex="-1" role="dialog" style="display:none;" position="fixed">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Чтобы закрыть окно нажмите Клоуз </h5>
        <button type="button" class="close" onclick=modWinClose(this) data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>    
-->    
    
    <script src="lampa.js"></script>
</body>
</html>
