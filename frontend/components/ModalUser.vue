<template>
    <div class="modal fade" id="userModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body p-1">
                    <div class="row g-1 flex-column align-items-center">
                    
                        <div class="col">
                            <div class="p-1 d-flex align-items-center">
                                <img src="~/assets/img/user.png" width="16" height="16" />
                                <span class="ms-2 h5">{{ $t('submenuName_user') }}</span>
                            </div>
                        </div>                        
                        
                        <div v-if="playfabSessionTicket" class="col">
                            <div class="p-1">
                                <small class="text-success">{{ $t('loggedIn') }}</small>
                            </div>
                        </div>
                        
                        <div v-if="!playfabSessionTicket" class="col">
                            <div class="p-1 lh-sm">
                                <small class="text-light">{{ $t('login_text') }}</small>
                            </div>
                        </div>
                        
                        <div v-if="!playfabSessionTicket" class="col">
                            <div class="row g-1 flex-column align-items-center">
                            
                                <div class="col">
                                    <div class="p-1">
                                        <span>{{ $t('login_title') }}</span>
                                    </div>
                                    <div class="mb-1">
                                        <input type="email" class="form-control" v-model="login.username" :placeholder="$t('login_username')" />
                                    </div>
                                    <div class="mb-1">
                                        <input type="password" class="form-control" v-model="login.password" :placeholder="$t('login_password')" />
                                    </div>
                                    <div class="px-0">
                                        <div class="row gx-2 align-items-center">
                                        
                                            <div class="col lh-sm">
                                                <small v-if="loginError" class="text-danger">{{ $t('error_' + loginError) }}</small>
                                            </div>
                                            
                                            <div class="col-auto">
                                                <button type="button" class="btn btn-primary" @click="onLogin()">
                                                    {{ $t('login_btn') }}
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col"><hr></div>
                                
                                <div v-if="registerSuccess" class="col">
                                    <div class="p-1">
                                        <small class="text-success">{{ $t('register_success') }}</small>
                                    </div>
                                </div>
                                
                                <div v-if="!registerSuccess" class="col">
                                    <div class="p-1">
                                        <span>{{ $t('register_title') }}</span>
                                    </div>
                                    <div class="mb-1">
                                        <input type="email" class="form-control" v-model="register.username" :placeholder="$t('register_username')" />
                                    </div>
                                    <div class="mb-1">
                                        <input type="password" class="form-control" v-model="register.password" :placeholder="$t('register_password')" />
                                    </div>
                                    <div class="mb-1">
                                        <input type="password" class="form-control" v-model="register.confirmPassword" :placeholder="$t('register_confirmPassword')" />
                                    </div>
                                    <div class="px-0">
                                        <div class="row gx-2 align-items-center">
                                        
                                            <div class="col lh-sm">
                                                <small v-if="registerError" class="text-danger">{{ $t('error_' + registerError) }}</small>
                                            </div>
                                            
                                            <div class="col-auto">
                                                <button type="button" class="btn btn-primary" @click="onRegister()">
                                                    {{ $t('register_btn') }}
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>                        
                        </div>                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    
    export default {
    
        data() {
            return {
                
                login: {
                    username: null,
                    password: null,
                },
                
                register: {
                    username: null,
                    password: null,
                    confirmPassword: null,
                },
                
                loginError: null,
                
                registerError: null,
                registerSuccess: null,
            }
        },
        
        computed: {
            ...mapGetters({
                
                playfabSessionTicket: 'playfabSessionTicket',
            }),
        },
        
        methods: {
            ...mapMutations({
                
                setPlayfabSessionTicket: 'setPlayfabSessionTicket',
            }),
        
            async onLogin() {
                
                this.loginError = null
                
                try {
                
                    let response = await this.$axios.$post('https://titleId.playfabapi.com/Client/LoginWithEmailAddress',
                        { TitleId:48360, Email:this.login.username, Password:this.login.password }
                    )                    
                    
                    this.setPlayfabSessionTicket({ value:response.data.SessionTicket })
                
                } catch(error) {
                    
                    this.loginError = error.response.data.error
                    console.log(error)
                }
            },
        
            async onRegister() {
                
                this.registerError = null
                this.registerSuccess = null
                
                if (this.register.password != this.register.confirmPassword) {
                    
                    this.registerError = 'PasswordsMismatch'
                    return
                }
                
                try {
                
                    let response = await this.$axios.$post('https://titleId.playfabapi.com/Client/RegisterPlayFabUser',
                        { TitleId:48360, Email:this.register.username, Password:this.register.password, RequireBothUsernameAndEmail:false }
                    )
                    
                    this.registerSuccess = true
                
                } catch(error) {
                    
                    this.registerError = error.response.data.error
                    console.log(error)
                }
            },
        },
    }
</script>