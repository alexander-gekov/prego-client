<template>

    <div class="square w-1/5 shadow-md text-center max-w-sm mb-5">
      <div class="content">
        <div class="p-4  flex justify-center items-center">
          <img src="https://i.pinimg.com/originals/a2/5f/4f/a25f4f58938bbe61357ebca42d23866f.png" class="image w-3/4 " alt="Company logo">
        </div>
        <div class="flex content-end flex-wrap w-full">
          <h4 class="text-center w-screen">Instagram</h4>
        </div>
      </div>
    </div>

</template>

<script>

</script>


<style scoped>
.square {
  position: relative;
}

.square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.square:hover{
  background-color: ghostwhite;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
