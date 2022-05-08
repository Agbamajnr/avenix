<template>
    <div class="container p-4"   id="divElement">
        <form class="form-group">
           <h2 style="text-align:left;">Welcome back <img src="@/assets/img/memoji.png" alt="">,</h2>
           <p class="mt-4">Enter the passcode for your Avenix account to continue to your dashboard</p>
           <div class="d-flex justify-content-center mt-5">
               <input type="text"><input type="text">  <input type="text"> <input type="text"> <input type="text"> <input type="text"><img class="img-fluid" src="@/assets/img/Shape.png" alt="">
           </div>
           <div style="text-align:left">
              <a href="#">Forgot passcode?</a>
           </div>
           <button type="button" class="btn btn-secondary btn-lg btn-block">Continue</button>
        </form>
    </div>
</template>

<script>
export default {
name:'password'
}
</script>

<style scoped>
#divElement{
    position: absolute;
    top: 40%;
    left: 40%;
    margin-top: -50px;
    margin-left: -50px;
    width: 400px;
    height: 400px;
    border: 1px solid #3E3E3E
}
form h2{
    color: #fff;
    font-size: 2rem;
}
form p{
    font-size: 13px;
}
form{
    color: #9F9F9F;
}
form a{
   color: yellow;
   font-size: 14px;
   margin-left: 0.5rem;
   text-decoration: none;
}
input[type=text]{
    background: #313131;
    border: none;
    height: 3.5rem;
    width: 2.5rem;
    margin-left: 0.5rem;
    border-radius: 2px;
    text-align: center;
    /* margin-top: 3rem; */
}
input[type=text]:focus{
    border: none;
    outline: none !important;
    border-bottom: 2px solid yellow;
    color: #fff;
}
form button{
    background: #313131;
    color: #fff;
    width: 100%;
    height: 2.5rem;
    margin-top: 5rem;
    font-size: 0.8rem;
    border: none;
}
input:focus::-webkit-input-placeholder {
    font-size: .75em;
    position: relative;
    top: -15px; 
    transition: 0.2s ease-out;
    color: yellow;
}

input::-webkit-input-placeholder {
    transition: 0.2s ease-in;
}
.d-flex{
    padding-left: 0 !important;
}
.d-flex img{
    width: 4rem;
    height: 1.5rem;
    margin-left: 2rem;
    margin-top: 1rem;
}

</style>