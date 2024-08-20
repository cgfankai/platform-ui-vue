import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useJwtTokenStore = defineStore('jwtToken', () => {
  const jwt = ref<string>("")
  const authenticate = ref(false);
  function setJwtToken(jwtToken: any) {
    jwt.value = jwtToken;
  }
  function setAuthenticate(status:boolean) {
    authenticate.value = status;
  }
  return { jwt, authenticate,setJwtToken,setAuthenticate }
})