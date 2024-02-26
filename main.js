import './style.css'

function load(){
    console.log('start rendrer');
    const app = document.getElementById('app')
        app.innerHTML = ` <div style="width: 100ve; height: 100vh; display: flex; align-items: center; justify-content: center;">
        <div style="width: 350px; text-align: center;">
        <h1 style="color: #f7df1e; margin-bottom: 20px;">SV js application use vite and js</h1>
        <div style="width: 350px; height: fit-content; display: flex; justify-content: center; align-items: center;
            gap: 20px;
        ">
            <img class="imglogo js-logo" src="assets/javascript.svg">
            <img class="imglogo vite-logo" src="assets/vite.svg">
        </div>
        </div>
        </div>`
    console.log('secess');
};

load()