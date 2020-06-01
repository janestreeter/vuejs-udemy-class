<template>
  <div id="excercise">
    <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
    <div>
      <button @click="startEffect">Start Effect</button>
      <div id="effect" :class="hl"> </div>
      </div>
    <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
    <div :class="[gc, vc]">I got a class :D</div>
    <!-- 3) Let the user enter a class (create some example classes) and attach it -->
      <div>
      
      <div :class="[gc,borderornot,vc,hl,lb]"> 
        <div>im changing too</div>
      </div>
      <input type="text" v-model="lb">

    </div>
    <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
    <div >
      <input type="text" v-model="vc">
      <input type="text" v-model="shouldiborder">{{shouldiborder}}
      <div>

      </div>
    </div>
    <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
    <div :style="[steps,colorertwo]">
      <input type="text" >
      <div></div>
    </div>
    <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
    <div>
      <button @click="startProgress">Start Progress</button>
      <div :class="[hoorahItsDone]" :style="[stausOfProgress]">{{progress}} {{stausOfProgress }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'excercise',
    data: () => ({
      vc: 'violet',
      gc: 'green',
      hl: 'highlight',
      lb: 'lightblue',
      aq: 'aqua',
      shouldiborder:'false',
      color:'colour',
      progress:0,
      progressDone:false,
    }),
    methods: {
      startEffect: function () {
        if (this.hl == "highlight") {
          this.hl = "shrink";
        }else if(this.hl == "shrink")
            this.hl = "highlight";
      },
      startProgress: function () {
        setInterval(() => {
          if(this.progress >= "100"){
            console.log('calling setInterval')
            clearInterval(setInterval);
            this.progressDone = true;
            return;
          }
          this.progress++;
        }, 1000);
        

        },

      },
    
    computed: {
      borderornot: function () {
      if (this.shouldiborder == "true"){
         return 'aqua';
      }else 
          return'';
      },
      steps: function() {
          return{

            color:this.color

          }
      
      },
      colorertwo: function(){
         return{

           color:this.darkblue
         }
      },
      stausOfProgress: function() {

            if (this.progressDone){
                return this.hoorahItsDone;

            }else{
              return '~ OoP It is not done! Wait or keep clicking to make it go faster!!';
            }

      },
      hoorahItsDone: function() {
        if (this.progressDone) {
          return 'It is done! Hoorah You Did it!!'
          
        }
      }

    }
  }


  
</script>

<style lang = "css"> 
#effect {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.highlight {
  background-color: red;
  width: 200px;
}

.shrink {
  background-color: gray;
  width: 50px;
}

.violet {
  background-color: violet;
}
.green {
  background-color: green;
}

.lightblue {
  background-color: lightblue;
}
.aqua{
  border:20px solid aqua;
}

.colour{
  background-color: salmon;
}
.darkblue{
  background-color: darkblue;
}

</style>
