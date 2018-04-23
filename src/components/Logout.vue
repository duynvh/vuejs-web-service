<template>
    
</template>

<script>
export default {
  name: 'Logout',
  beforeCreate() {
      localStorage.removeItem("user");
      this.$router.push('/');
  }
}    
</script>
