<template>
<div>
  <div class="flex justify-between">
    <div class="m-12 ml-48 w-1/3">
      <h2>{{ $t('dashboardEmployee.title') }}, employee_name! </h2>
      <div class="below-title links">
        <span>{{ $t('dashboardEmployee.subtitle') }} </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'EmployeeDashboard',
  data() {
    return {}

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
