// Primjeri za home screen button 
<template>



  <div class="q-pa-md q-gutter-sm">
     <q-btn href="http://agro.veleri.hr/biljne-vrste/" 
     label="Početna stranica"  
     color="green" 
     icon="home" 
     />


      <q-btn href="http://agro.veleri.hr/biljne-vrste/" 
      label="Početna stranica" 
      outline color="green" 
      icon="home" 
      />
     
      <q-btn href="http://agro.veleri.hr/biljne-vrste/" 
      color="green" 
      icon="home" 
      />

      <q-btn href="http://agro.veleri.hr/biljne-vrste/" 
      outline color="green" 
      icon="home" 
      />

      <q-btn href="http://agro.veleri.hr/biljne-vrste/" 
      outline color="green" 
      icon="eco" 
      />
   
      <q-btn href="http://agro.veleri.hr/biljne-vrste/" 
      color="green" 
      icon="eco" 
      />

      <q-btn href="http://agro.veleri.hr/biljne-vrste/" 
      label="Početna stranica" 
      outline color="green" 
      icon="eco" 
      />

      <q-btn href="http://agro.veleri.hr/biljne-vrste/" 
      label="Početna stranica" 
      color="green" 
      icon="eco" 
      /> 
  
  </div>

</template>

<script>
export default {
  setup () {
    function linkClick (e, go) {
      e.preventDefault() // we choose when we navigate

      // console.log('triggering navigation in 2s')
      setTimeout(() => {
        // console.log('navigating as promised 2s ago')
        go()
      }, 2000)
    }

    return { linkClick }
  }
}
</script>

