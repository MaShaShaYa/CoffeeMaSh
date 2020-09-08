<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

    <title>Кофе-машина</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    
<div class="container">
    <div class="row">
        
        <div class="col-6 coffee-list d-flex flex-column justify-content-around">
            
            <div class="coffee-item">
                <img src="img/americano.png" alt="Американо">
                <span>Американо - 50 руб.</span>
            </div>
            
            <div class="coffee-item">
                <img src="img/cappuccino.png" alt="Американо">
                <span>Капучино - 73 руб.</span>
            </div>
            
            <div class="coffee-item">
                <img src="img/espresso.png" alt="Американо">
                <span>Эспрессо - 61 руб.</span>
            </div>
            
            <div class="coffee-item">
                <img src="img/latte.jpg" alt="Американо">
                <span>Латтэ - 112 руб.</span>
            </div>
            
        </div>
        
        <div class="col-6 coffee-oper">
            <div class="row">
                
                <div class="col-6">
                    <div class="display">
                        <div class="p">Выберите кофе</div>
                            <div class="progress">
                              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                            </div>
                        
                    </div>
                    
                    <div class="cup-container">
                        <img src="img/americano.png" alt="" class="cup">
                        
                    </div>
                    
                </div>
                
                
                
                <div class="col-6">
                    
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Баланс">
                      <div class="input-group-append">
                        <span class="input-group-text">&#8381;</span>
                      </div>
                    </div>
                    
                    <div class="atm-container">
                        <img src="img/bill_acc.png" alt="" class="atm">
                    </div>
                    
                    <button class="btn btn-primary btn-block my-2">Сдача</button>
                    <div class="change-container">возьмите ваши денюжки</div>
                    
                </div>
                
            </div>
        </div>
        
    </div>
</div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>