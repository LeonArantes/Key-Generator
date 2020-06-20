class keyController{
   constructor(){
    this._locale = 'pt-br';
    this.box = document.querySelector("div.box");
    this.form_keys = document.querySelector(".form-keys");
    this.visor_keys = document.querySelector(".form-keys input[name='key-visor']");
    this.btn_keys = document.querySelector(".form-keys input[name='gerar-key']");
    this.btn_copy = document.querySelector(".form-keys input[name='copy-key']");
    this.copy_true = document.querySelector(".key-true");
    this.btn_edit = document.querySelector(".edit");
    this.form_edit = document.querySelector(".form-length");
    this.input_length = document.querySelector(".form-length input[type='number']");
    this.btn_save = document.querySelector(".form-length input[type='submit']");
    this.bullets = document.querySelector("header.header-page span");
    this.inicialize();
   }

   inicialize(){
    this.button_gerarKey();
    this.button_copyKey();
    this.button_editLength();
    this.length = 6; // Padrão de caracteries quando iniciar
    this.effects();
   }

   button_gerarKey(){
        this.btn_keys.addEventListener("click", ()=>{
           this.generatorRandonKey();
        })
   }

   generatorRandonKey(){
       this.result = '';
       this.characters = '@ABaCeDEcFfGbHiIjJKLeMiNOhPkQlRSTmUVnWXoYZ012p3q4s5r67tu89v0wx12345y6z789';
       this.charactersLength = this.characters.length;
       for ( var i = 0; i < this.length ; i++ ) {
          this.result += this.characters.charAt(Math.floor(Math.random() * this.charactersLength));
       }
       this.visor_keys.value = this.result;
   }

   button_copyKey(){
        this.btn_copy.addEventListener("click", ()=>{
               this.copyKey();
        })
   }

   copyKey(){
       this.visor_keys.focus();
       document.execCommand("selectAll");
       document.execCommand("copy");
       setInterval(() => {
        this.copy_true.style.display = "none";
       }, 3000);

       (this.visor_keys.value == "")? this.copy_true.style.display = "none":
           this.copy_true.style.display = "inline-block";
   }

    button_editLength(){
        this.btn_edit.addEventListener("click",() => {
           this.form_keys.style.display = "none";
           this.form_edit.style.display = "block";
        })
        this.button_saveLength();
    }

    capture_length(){
        console.log(this.input_length.value);
    }

    button_saveLength(){
       this.btn_save.addEventListener("click", (e) => {
           e.preventDefault();
           this.form_keys.style.display = "block";
           this.form_edit.style.display = "none";
           this.length = 6;
           this.length = this.input_length.value;

           if(this.input_length.value == ""){
                 this.length = 6;
           };
       })
    }
};