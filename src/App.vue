<template>
  <div class="calculator">
    <div class="screen">{{ sum || answer }}</div>
    <div class="num-group">
      <button type="button" @click="createSum('1', 'number')" class="btn-num">
        1
      </button>
      <button type="button" @click="createSum('2', 'number')" class="btn-num">
        2
      </button>
      <button type="button" @click="createSum('3', 'number')" class="btn-num">
        3
      </button>
      <button
        type="button"
        @click="createSum(' + ', 'sign')"
        class="btn-num sign"
      >
        +
      </button>
    </div>
    <div class="num-group">
      <button type="button" @click="createSum('4', 'number')" class="btn-num">
        4
      </button>
      <button type="button" @click="createSum('5', 'number')" class="btn-num">
        5
      </button>
      <button type="button" @click="createSum('6', 'number')" class="btn-num">
        6
      </button>
      <button
        type="button"
        @click="createSum(' - ', 'sign')"
        class="btn-num sign"
      >
        -
      </button>
    </div>
    <div class="num-group">
      <button type="button" @click="createSum('7', 'number')" class="btn-num">
        7
      </button>
      <button type="button" @click="createSum('8', 'number')" class="btn-num">
        8
      </button>
      <button type="button" @click="createSum('9', 'number')" class="btn-num">
        9
      </button>
      <button
        type="button"
        @click="createSum(' * ', 'sign')"
        class="btn-num sign"
      >
        x
      </button>
    </div>
    <div class="num-group">
      <button type="button" @click="clearAll" class="btn-num sign">AC</button>
      <button type="button" @click="createSum('0', 'number')" class="btn-num">
        0
      </button>
      <button type="button" @click="_bodmas" class="btn-num sign">=</button>
      <button
        type="button"
        @click="createSum(' / ', 'sign')"
        class="btn-num sign"
      >
        /
      </button>
    </div>
  </div>
</template>

<script>
import { bodmas } from "@/calclib";

export default {
  name: "App",
  data() {
    return {
      answer: null,
      sum: "",
      lastClicked: null,
    };
  },
  methods: {
    createSum(property, type) {
      if (type == "sign" && this.lastClicked !== "number") return;

      this.lastClicked = type;
      this.sum = this.sum + property;
    },

    _bodmas() {
      this.answer = bodmas(this.sum);
      this.sum = "";
      this.lastClicked = null;
    },
    clearAll() {
      this.sum = "";
      this.answer = "";
      this.lastClicked = null;
    },
  },
};
</script>

<style>
html {
  background-color: black;
}
</style>
<style scoped>

.calculator {
  background-color: white;
  border: 12px solid white;
  border-radius: 8px;
  width: 280px;
  height: 400px;
  text-align: center;
  position: relative;
  justify-content: space-between;
  margin: 200px auto;
  padding-bottom: 8px;
}

.screen {
  border: solid black 5px;
  border-radius: 8px;
  height: 100px;
  font-size: 36px;
  padding: 12px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

#mynums {
  background-color: white;
  position: relative;
}

.num-group {
  height: 70px;
  display: flex;
  text-align: center;
  position: relative;
  justify-content: space-between;
  border: darkblue 2px solid;
  box-sizing: border-box;
}

.num-group .btn-num {
  font-size: 32px;
  font-family: "Courier New", Courier, monospace;
  background-color: violet;
  border: solid yellow 2px;
  width: 70px;
  border-radius: 5px;
  padding: 3px;
}

.num-group .btn-num.sign {
  background-color: orange;
}
</style>
