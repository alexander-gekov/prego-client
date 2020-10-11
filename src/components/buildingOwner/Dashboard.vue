<template>
<div>

  <div class="flex justify-between">
    <div class="m-12 ml-48 w-1/3">
      <div class="pb-4">
        <span class="links text-purple-500 underline">Kyle Sparx (owner)</span>
      </div>
      <h2> SX TOWER </h2>
      <div class="below-title links">
        <span>Address: Rachelsmolen 14</span>
      </div>
    </div>
    </div>

  <CRUDCompany></CRUDCompany>
</div>
</template>

<script>
import CRUDCompany from '@/components/buildingOwner/CRUDCompany'

export default {
  name: 'DashboardBuildingOwner',
  components: {
    CRUDCompany
  }

}
</script>

<style scoped>


.links {
  text-transform: uppercase;
  letter-spacing: 2px;
}

.below-title {
  border-top: dotted 1px #999;
  border-bottom: dotted 1px #999;
  padding-top: 10px;
  padding-bottom: 10px;
  color: darkgray;
  font-size: smaller;
}


h2 {
  font-size: 35px;
  line-height: 1.4em;
}
</style>
