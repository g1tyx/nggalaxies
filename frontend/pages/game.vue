<template>
    <div v-if="loaded" class="fadein h-100 row flex-column flex-md-row g-0 align-items-stretch">
    
        <div class="col-auto col-md-6 bg-dark d-flex flex-column">
            <div class="flex-fill row flex-column gy-1 gx-0 justify-content-between">
            
                <div class="col-12 py-1 px-1">
                    <div class="row g-1">
                    
                        <div class="col-auto dropdown">
                        
                            <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Menu">
                                <i class="fas fa-fw fa-bars"></i>
                            </button>
                            
                            <div class="dropdown-menu bg-dark border-0 p-0" style="width:250px;">
                                <div class="row flex-column g-1" style="margin-top:-.125rem!important;">
                                    
                                    <div class="col">
                                        <a class="w-100 btn btn-secondary d-flex align-items-center" href="https://discord.gg/3UkgeeT9CV" target="_blank">
                                            <img src="~/assets/img/discord.png" width="16" height="16" />
                                            <span class="ms-2">{{ $t('submenuName_discord') }}</span>
                                        </a>
                                    </div>
                                    
                                    <div class="col">
                                        <button type="button" class="w-100 btn btn-secondary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#donatingModal">
                                            <img src="~/assets/img/donating.png" width="16" height="16" />
                                            <span class="ms-2">{{ $t('submenuName_donating') }}</span>
                                        </button>
                                    </div>
                                    
                                    <div class="col">
                                        <button type="button" class="w-100 btn btn-secondary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#optionsModal">
                                            <img src="~/assets/img/options.png" width="16" height="16" />
                                            <span class="ms-2">{{ $t('submenuName_options') }}</span>
                                        </button>
                                    </div>

                                    <div class="col">
                                        <button type="button" class="w-100 btn btn-secondary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#aboutModal">
                                            <img src="~/assets/img/about.png" width="16" height="16" />
                                            <span class="ms-2">{{ $t('submenuName_about') }}</span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                    
                        </div>
                    
                        <div class="col">
                            <div class="row flex-column gx-0 gy-1 dropdown">
                            
                                <button type="button" class="w-100 btn btn-secondary d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img :src="require(`~/assets/img/${currentGalaxy.id}.png`)" width="16" height="16" alt="Galaxy Icon" />
                                    <span class="ms-1">{{ $t('galaxyName_' + currentGalaxy.id) }}</span>
                                    <span class="ms-2 badge bg-danger fw-normal">BETA Testing</span>
                                </button>
                                
                                <div class="w-100 dropdown-menu bg-dark border-0 p-0">
                                    <div class="row gx-0 gy-1" style="margin-top:-.125rem!important;">
                                    
                                        <div v-for="galaxyId in galaxyIds" :key="galaxyId" class="col-12">
                                            <button type="button" class="w-100 btn btn-secondary" :class="{ 'border border-primary':galaxyId == currentGalaxy.id }" @click="onChangeGalaxy(galaxyId)">
                                                <div class="row g-2 ">
                                                
                                                    <div class="col-auto">
                                                        <img :src="require(`~/assets/img/${galaxyId}.png`)" width="24px" height="24px" />
                                                    </div>
                                                    
                                                    <div class="col text-start">
                                                    
                                                        <div class="row">
                                                            
                                                            <div class="col">
                                                                <span>{{ $t('galaxyName_' + galaxyId) }}</span>
                                                            </div>
                                                            
                                                            <div class="col-auto">
                                                                <span v-if="galaxyId == currentGalaxy.id" class="badge bg-primary fw-normal">{{ $t('current') }}</span>
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                        <div class="lh-sm">
                                                            <small class="text-light">{{ $t('galaxyDesc_' + galaxyId) }}</small>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div class="col-auto">
                            <button type="button" class="btn btn-secondary position-relative" data-bs-toggle="modal" data-bs-target="#userModal">
                                <img src="~/assets/img/user.png" width="16" height="16" />
                                <div v-if="!playfabSessionTicket" class="position-absolute top-0 end-0 small"><i class="fas fa-fw fa-circle text-danger small"></i></div>
                            </button>
                        </div>
                        
                    </div>
                </div>
                
                <div v-if="currentFleet" class="col-12 flex-fill py-1 px-1">
                    <div class="h-100 row g-1 align-items-center">
                    
                        <div class="col-12">
                        
                            <div class="px-2">
                                <div class="row g-2 align-items-center">
                                    
                                    <div class="col-4 text-end">
                                        <div v-if="currentGalaxy.totalDamages.current < 4" class="badge bg-secondary fw-normal">
                                            <span>{{ $t('tap') }}</span>
                                            <i class="fas fa-fw fa-long-arrow-alt-right"></i>
                                        </div>
                                    </div>
                                    
                                    <div class="col-4 text-center">
                                        <button type="button" class="btn p-0 bump" @click="onManualFire()" aria-label="Manual Fire">
                                            <img :src="require(`~/assets/img/${currentGalaxy.id}.png`)" width="64px" />
                                        </button>
                                    </div>
                                    
                                    <div class="col-4">
                                        <div v-if="manualFire" class="badge bg-success fw-normal">
                                            <div class="d-flex align-items-center lh-1">
                                                <span class="me-1" style="margin-top:2px;">+<FormatNumber :value="manualDps" /></span>
                                                <img src="~/assets/img/credit.png" width="12" height="12" alt="Credit" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <BoxFleetLife :value="currentFleetLife" />
                            
                        </div>
                        
                    </div>                    
                </div>
                
                <div v-if="!currentFleet" class="col-12 flex-fill py-1 px-1">
                    <div class="h-100 row g-1 align-items-center">
                    
                        <div class="col-12 text-center text-success">
                           <h3 class="mb-2">{{ $t('successBar_title') }}</h3>
                           <div>{{ $t('galaxyName_' + currentGalaxyId) }} {{ $t('successBar_text1') }}</div>
                        </div>
                        
                        <div class="col-12 text-center">
                            <div class="text-light">{{ $t('successBar_text2') }} <FormatTime :value="(currentGalaxy.endTime - currentGalaxy.startTime) / 1000" class="text-white h6" /></div>
                            <div class="text-light">{{ $t('successBar_text3') }}</div>
                            <button type="button" class="mt-2 btn btn-primary" @click="onReset()">
                                <span>{{ $t('btnName_reset') }}</span>
                            </button>                        
                        </div>
                    
                        <div class="col-12 text-center">                       
                            <span>{{ $t('donatingModal_text2') }}</span>
                            <div class="p-1 mt-2">
                                <div class="row g-1">
                                
                                    <form class="col" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                        <input type="hidden" name="cmd" value="_s-xclick">
                                        <input type="hidden" name="hosted_button_id" value="7XYD7SJFKQ8M4">
                                        <button type="submit" class="w-100 btn btn-primary">
                                            <div class="row gx-1 align-items-center justify-content-center">
                                                <div class="col-auto d-flex align-items-center"><img src="~/assets/img/paypal.png" width="16" height="16" /></div>
                                                <div class="col-auto">Paypal</div>
                                            </div>
                                        </button>
                                    </form>
                                    
                                    <div class="col">
                                        <a href="https://www.patreon.com/bePatron?u=61283131" class="w-100 btn btn-primary" target="_blank">
                                            <div class="row gx-1 align-items-center justify-content-center">
                                                <div class="col-auto d-flex align-items-center"><img src="~/assets/img/patreon.png" width="16" height="16" /></div>
                                                <div class="col-auto">Patreon</div>
                                            </div>
                                        </a>
                                    </div>
                                    
                                    <div class="col">
                                        <a href="https://ko-fi.com/freddecgames" class="w-100 btn btn-primary" target="_blank">
                                            <div class="row gx-1 align-items-center justify-content-center">
                                                <div class="col-auto d-flex align-items-center"><img src="~/assets/img/kofi.png" width="16" height="16" /></div>
                                                <div class="col-auto">Ko-fi</div>
                                            </div>
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                
                <div class="col-12 py-1 px-1">
                    <div class="row g-1">
                        
                        <BoxCreditCount :value="currentGalaxy.creditCount" />
                        
                        <div class="col-6 d-flex align-items-baseline justify-content-center">
                            <img src="~/assets/img/damage.png" width="12" height="12" alt="Total Damage Per Second" />
                            <FormatNumber :value="totalDps" class="ms-1" />
                            <small class="ms-1 text-light">/{{ $t('sec') }}</small>
                        </div>
                        
                        <div class="col-12 d-flex align-items-baseline justify-content-center">
                            <img src="~/assets/img/darkmatter.png" width="12" height="12" alt="Dark Matter" />
                            <FormatNumber :value="currentGalaxy.darkmatterCount" class="ms-1" />
                            <small class="ms-1 text-light">(<FormatNumber :value="potentialDarkmatter" />)</small>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
        
        <div class="col col-md-6 bg-dark d-flex flex-column pt-1" style="min-height:1px;">
            <div class="flex-fill row flex-column gy-1 gx-0">
                
                <div class="col flex-fill d-flex flex-column">
                    <div class="flex-fill tab-content">
                    
                        <div class="h-100 px-1 tab-pane fade" id="prestige" role="tabpanel" aria-labelledby="prestige-tab">
                            <div class="flex-fill row flex-column g-1">
                            
                                <div class="col d-flex flex-column">
                                    <div class="flex-fill bg-secondary p-1 rounded-1">
                                        <div class="row flex-column g-1">
                                            
                                            <div class="col">
                                                <div class="p-1">
                                                    <h5>{{ $t('menuName_prestige') }}</h5>
                                                </div>
                                            </div>
                                            
                                            <div class="col">
                                                <div class="p-1">
                                                    <div class="lh-sm">
                                                        <small class="text-light">{{ $t('prestigeBox_text1') }}</small>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="col">
                                                <div class="p-1">
                                                    <div class="row g-1">
                                                    
                                                        <div class="col">
                                                            <span>{{ $t('prestigeBox_title1') }}</span>
                                                        </div>
                                                        
                                                        <div class="col-auto d-flex align-items-center">
                                                            <img src="~/assets/img/darkmatter.png" width="10" height="10" />
                                                            <FormatNumber :value="currentGalaxy.darkmatterCount" class="ms-1" />
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="col">
                                                <div class="p-1">
                                                    <div class="row g-1">
                                                    
                                                        <div class="col">
                                                            <span>{{ $t('prestigeBox_title2') }}</span>
                                                        </div>
                                                        
                                                        <div class="col-auto">
                                                            <span class="text-success">+{{ (currentGalaxy.darkmatterCoeff * 100).toFixed(1) }}%</span>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="col">
                                                <div class="p-1">
                                                    <div class="row g-1">
                                                    
                                                        <div class="col">
                                                            <span>{{ $t('prestigeBox_title3') }}</span>
                                                        </div>
                                                        
                                                        <div class="col-auto d-flex align-items-center">
                                                            <img src="~/assets/img/darkmatter.png" width="10" height="10" />
                                                            <FormatNumber :value="potentialDarkmatter" class="ms-1" />
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="col">
                                                <div class="p-1 text-end">
                                                    <button type="button" class="btn btn-primary" :class="{ 'disabled':potentialDarkmatter < 1 }" :disabled="potentialDarkmatter < 1" @click="onPrestige()">
                                                        <span class="h6">{{ $t('btnName_prestige') }}</span>
                                                    </button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        
                        <div class="h-100 px-1 tab-pane fade" id="boosts" role="tabpanel" aria-labelledby="boosts-tab">
                            <div class="row flex-column g-1">
                            
                                <div class="col-12">
                                    <div class="row g-1 justify-content-end">
                                    
                                        <div class="col">
                                            <div class="bg-secondary rounded-1 px-2 py-2">
                                                <div class="row g-1 align-items-center">
                                                
                                                    <div class="col">
                                                        <span class="text-light">{{ $t('boostPurchased') }}</span>
                                                    </div>
                                                    
                                                    <div class="col-auto">
                                                        <span>{{ purchasedBoosts.length }}</span>
                                                        <small class="text-light">/{{ purchasedBoosts.length + boosts.length }}</small>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-primary py-2" :class="{ 'disabled':boostsToBuy <= 0 }" :disabled="boostsToBuy <= 0" style="width:85px;" @click="onBuyAllBoosts()">
                                                <span>{{ $t('btnName_buyAll') }}</span>
                                            </button>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                <div class="col-12 flex-fill d-flex flex-column" style="overflow-x: hidden; overflow-y: auto; height: 1px;">
                                    <div class="flex-fill row g-1">
                                        <BoxBoost v-for="boost in boosts" :key="boost.id" :boost="boost" />
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        
                        <div class="h-100 px-1 tab-pane fade" id="upgrades" role="tabpanel" aria-labelledby="upgrades-tab">
                            <div class="row flex-column g-1">
                                
                                <div class="col-12">
                                    <div class="row g-1 justify-content-end">
                                    
                                        <div class="col">
                                            <div class="bg-secondary rounded-1 px-2 py-2">
                                                <div class="row g-1 align-items-center">
                                                
                                                    <div class="col">
                                                        <span class="text-light">{{ $t('upgradePurchased') }}</span>
                                                    </div>
                                                    
                                                    <div class="col-auto">
                                                        <span>{{ purchasedUpgrades.length }}</span>
                                                        <small class="text-light">/{{ purchasedUpgrades.length + upgrades.length }}</small>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="col-auto">
                                            <button type="button" class="btn btn-primary py-2" :class="{ 'disabled':upgradesToBuy <= 0 }" :disabled="upgradesToBuy <= 0" style="width:85px;" @click="onBuyAllUpgrades()">
                                                <span>{{ $t('btnName_buyAll') }}</span>
                                            </button>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                <div class="col-12 flex-fill d-flex flex-column" style="overflow-x: hidden; overflow-y: auto; height: 1px;">
                                    <div class="flex-fill row g-1">
                                        <BoxUpgrade v-for="upgrade in upgrades" :key="upgrade.id" :upgrade="upgrade" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div class="h-100 px-1 tab-pane fade show active" id="ships" role="tabpanel" aria-labelledby="ships-tab">
                            <div class="row flex-column g-1">
                                
                                <div v-if="currentObjective" class="col-12">
                                    <div class="row g-1">
                                    
                                        <div class="col-12">
                                            <div class="bg-secondary rounded-1 p-1 ps-2">
                                                <div class="row gy-1 gx-2 align-items-center">
                                                
                                                    <div class="col">
                                                        <div>{{ $t('objective_title1') }}</div>
                                                        <small class="text-light"><span class="text-white">{{ currentObjective.threshold.toLocaleString() }}</span> units of each ship</small>
                                                    </div>
                                                    
                                                    <div class="col">
                                                        <div>{{ $t('objective_title2') }}</div>
                                                        <small class="text-light">{{ $t('shipDamage') }} <span class="text-white">x{{ currentObjective.modifier.coeff }}</span></small>
                                                    </div>
                                                    
                                                    <div class="col-auto">
                                                        <button type="button" class="w-100 btn btn-primary" :class="{ 'disabled':canClaim == false }" :disabled="canClaim == false" @click="onClaim()">
                                                            <span>{{ $t('btnName_claim') }}</span>
                                                        </button>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                <div class="col-12">
                                    <div class="row g-1">
                                        
                                        <div class="col">
                                            <button class="w-100 btn btn-sm btn-secondary" :class="{ 'active':currentGalaxy.buildAmount == '+1' }" @click="onChangeBuildAmount('+1')">
                                                <span>{{ $t('buildAmount_+1') }}</span>
                                            </button>
                                        </div>
                                    
                                        <div class="col">
                                            <button class="w-100 btn btn-sm btn-secondary" :class="{ 'active':currentGalaxy.buildAmount == '+10' }" @click="onChangeBuildAmount('+10')">
                                                <span>{{ $t('buildAmount_+10') }}</span>
                                            </button>
                                        </div>

                                        <div class="col">
                                            <button class="w-100 btn btn-sm btn-secondary" :class="{ 'active':currentGalaxy.buildAmount == '+100' }" @click="onChangeBuildAmount('+100')">
                                                <span>{{ $t('buildAmount_+100') }}</span>
                                            </button>
                                        </div>

                                        <div class="col">
                                            <button class="w-100 btn btn-sm btn-secondary" :class="{ 'active':currentGalaxy.buildAmount == 'next' }" @click="onChangeBuildAmount('next')">
                                                <span>{{ $t('buildAmount_next') }}</span>
                                            </button>
                                        </div>

                                        <div class="col">
                                            <button class="w-100 btn btn-sm btn-secondary" :class="{ 'active':currentGalaxy.buildAmount == 'max' }" @click="onChangeBuildAmount('max')">
                                                <span>{{ $t('buildAmount_max') }}</span>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                
                                <div class="col-12 flex-fill d-flex flex-column" style="overflow-x: hidden; overflow-y: auto; height: 1px;">
                                    <div class="flex-fill row g-1">
                                        <BoxShip v-for="ship in ships" :key="ship.id" :ship="ship" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div class="col-auto pb-1 px-1">
                    <ul class="nav nav-tabs row g-1" role="tablist">
                        
                        <li class="col nav-item" role="presentation">
                            <button class="w-100 btn btn-secondary px-1" id="prestige-tab" data-bs-toggle="tab" data-bs-target="#prestige" type="button" role="tab" aria-controls="prestige" aria-selected="false">
                                {{ $t('menuName_prestige') }}
                            </button>
                        </li>
                        
                        <li class="col nav-item" role="presentation">
                            <button class="w-100 btn btn-secondary px-1 position-relative" id="boosts-tab" data-bs-toggle="tab" data-bs-target="#boosts" type="button" role="tab" aria-controls="boosts" aria-selected="false">
                                {{ $t('menuName_boosts') }}
                                <div v-if="boostsToBuy > 0" class="position-absolute top-0 end-0" style="padding:0 3px;"><small class="badge bg-success" style="padding:2px 3px;">{{ boostsToBuy }}</small></div>
                            </button>
                        </li>
                        
                        <li class="col nav-item" role="presentation">
                            <button class="w-100 btn btn-secondary px-1 position-relative" id="upgrades-tab" data-bs-toggle="tab" data-bs-target="#upgrades" type="button" role="tab" aria-controls="upgrades" aria-selected="false">
                                {{ $t('menuName_upgrades') }}
                                <div v-if="upgradesToBuy > 0" class="position-absolute top-0 end-0" style="padding:0 3px;"><small class="badge bg-success" style="padding:2px 3px;">{{ upgradesToBuy }}</small></div>
                            </button>
                        </li>
                        
                        <li class="col nav-item" role="presentation">
                            <button class="w-100 btn btn-secondary px-1 active" id="ships-tab" data-bs-toggle="tab" data-bs-target="#ships" type="button" role="tab" aria-controls="ships" aria-selected="true">
                                {{ $t('menuName_ships') }}
                            </button>
                        </li>
                        
                    </ul>
                </div>

            </div>
        </div>
        
        <ModalUser />
        <ModalAbout />
        <ModalOptions />
        <ModalDonating />
        
    </div>
</template>

<style>
    #container-ship > div:first-child { margin-top: 0!important; }
</style>

<script>
    import LZString from 'lz-string'

    import { mapGetters, mapMutations } from 'vuex'
    
    export default {
    
        data() {
            return {
                
                started: false,
                manualFire: false,
                saveInterval: null,
                currentFleetLife: null,
            }
        },    
        
        computed: {
            ...mapGetters({
                
                userSaveData: 'saveData',
                currentGalaxyId: 'currentGalaxyId',
                playfabSessionTicket: 'playfabSessionTicket',
                
                galaxyIds: 'galaxy/galaxyIds',
                galaxyById: 'galaxy/byId',
                galaxySaveData: 'galaxy/saveData',
                galaxyDarkmatterPotential: 'galaxy/darkmatterPotential',
                
                fleetById: 'fleet/byId',
                fleetNextId: 'fleet/nextId',
                fleetSaveData: 'fleet/saveData',
                
                shipSaveData: 'ship/saveData',
                shipCurrentListByGalaxy: 'ship/currentListByGalaxy',
                
                upgradeSaveData: 'upgrade/saveData',
                upgradeCurrentListByGalaxy: 'upgrade/currentListByGalaxy',
                upgradePurchasedListByGalaxy: 'upgrade/purchasedListByGalaxy',
                
                boostSaveData: 'boost/saveData',
                boostCurrentListByGalaxy: 'boost/currentListByGalaxy',
                boostPurchasedListByGalaxy: 'boost/purchasedListByGalaxy',
                
                objectiveSaveData: 'objective/saveData',
                objectiveCurrentListByGalaxy: 'objective/currentListByGalaxy',
            }),
            
            loggedIn() { return this.$auth.loggedIn },
            
            currentGalaxy: function() { return this.galaxyById(this.currentGalaxyId) },
            currentGalaxyCreditCount: function() { return this.galaxyById(this.currentGalaxyId).creditCount },
            currentGalaxyDarkmatterCount: function() { return this.galaxyById(this.currentGalaxyId).darkmatterCount },
            
            currentFleet: function() { return this.fleetById(this.currentGalaxy.currentFleetId) },
            currentFleets: function() { return this.fleetByGalaxy(this.currentGalaxyId) },
            
            currentObjective: function() { return this.objectiveCurrentListByGalaxy(this.currentGalaxyId)[0] },
            
            potentialDarkmatter: function() { return this.galaxyDarkmatterPotential(this.currentGalaxyId) },
            
            ships: function() { return this.shipCurrentListByGalaxy(this.currentGalaxyId) },
            
            upgrades: function() { return this.upgradeCurrentListByGalaxy(this.currentGalaxyId) },
            purchasedUpgrades: function() { return this.upgradePurchasedListByGalaxy(this.currentGalaxyId) },
            
            boosts: function() { return this.boostCurrentListByGalaxy(this.currentGalaxyId) },
            purchasedBoosts: function() { return this.boostPurchasedListByGalaxy(this.currentGalaxyId) },
            
            canClaim: function() {
                
                let ret = true
                this.ships.forEach(ship => { if (ship.count < this.currentObjective.threshold) ret = false })
                return ret
            },
            
            totalDps: function() {
            
                let damages = 0
                
                let ships = this.shipCurrentListByGalaxy(this.currentGalaxyId)
                ships.forEach(ship => {
                
                    damages += ship.damage.modifier * ship.damage.base * ship.count * (1 + (this.currentGalaxy.darkmatterCount * this.currentGalaxy.darkmatterCoeff))                    
                })
                
                return damages
            },
            
            manualDps: function() {
            
                return Math.max(1, Math.floor(this.totalDps / 1000))
            },
        },
        
        watch: {
        
            currentGalaxyCreditCount: function() { this.checkUpgradesToBuy() },
        
            currentGalaxyDarkmatterCount: function() { this.checkBoostsToBuy() },
        },
        
        methods: {
            ...mapMutations({
                
                setCurrentGalaxyId: 'setCurrentGalaxyId',
                
                galaxyReset: 'galaxy/reset',
                galaxyPrestige: 'galaxy/prestige',
                galaxySetEndTime: 'galaxy/setEndTime',
                galaxySetStartTime: 'galaxy/setStartTime',
                galaxySetBuildAmount: 'galaxy/setBuildAmount',
                galaxySetCreditCount: 'galaxy/setCreditCount',
                galaxySetDarkmatterCount: 'galaxy/setDarkmatterCount',
                galaxySetLastSaveDate: 'galaxy/setLastSaveDate',
                galaxySetTotalDamagesAll: 'galaxy/setTotalDamagesAll',
                galaxySetTotalDamagesCurrent: 'galaxy/setTotalDamagesCurrent',
                galaxySetCurrentFleetId: 'galaxy/setCurrentFleetId',
                galaxyApplyModifier: 'galaxy/applyModifier',
                
                fleetReset: 'fleet/reset',
                fleetSetLife: 'fleet/setLife',
 
                shipReset: 'ship/reset',
                shipApplyModifier: 'ship/applyModifier',
                
                upgradeReset: 'upgrade/reset',
                upgradeSetCount: 'upgrade/setCount',
                upgradeSetCanBuy: 'upgrade/setCanBuy',

                boostReset: 'boost/reset',
                boostSetCount: 'boost/setCount',
                boostSetCanBuy: 'boost/setCanBuy',
                
                objectiveReset: 'objective/reset',
                objectiveSetCount: 'objective/setCount',
            }),
        
            async save() {
                
                this.galaxySetLastSaveDate({ galaxyId:this.currentGalaxyId, value:new Date().getTime() })
                
                if (this.currentFleet) this.fleetSetLife({ fleetId:this.currentFleet.id, value:this.currentFleetLife })
                
                let loadedData = localStorage.getItem('nggalaxies')
                let text = LZString.decompressFromBase64(loadedData)
                let localeData = JSON.parse(text)
                
                localeData.user = this.userSaveData
                
                localeData[this.currentGalaxyId] = {
                    
                    galaxy: this.galaxySaveData(this.currentGalaxyId),
                    fleets: this.fleetSaveData(this.currentGalaxyId),
                    ships: this.shipSaveData(this.currentGalaxyId),
                    upgrades: this.upgradeSaveData(this.currentGalaxyId),
                    boosts: this.boostSaveData(this.currentGalaxyId),
                    objectives: this.objectiveSaveData(this.currentGalaxyId),
                }
                
                text = JSON.stringify(localeData)
                let compressed = LZString.compressToBase64(text)
                localStorage.setItem('nggalaxies', compressed)
                
                if (this.playfabSessionTicket) {
                
                    try {
                    
                        let response = await this.$axios.$post('https://48360.playfabapi.com/Client/UpdateUserData',
                            { Data:{ 'nggalaxies':compressed } },
                            { headers: { 'X-Authorization':this.playfabSessionTicket } }
                        )
                        
                        console.log(response)
                    
                    } catch(error) {
                        
                        console.log(error)
                    }
                }
            },
            
            checkUpgradesToBuy() {
            
                this.upgradesToBuy = 0
                
                this.upgrades.forEach(upgrade => {
                
                    let canBuy = upgrade.cost <= this.currentGalaxyCreditCount
                    if (canBuy != upgrade.canBuy) this.upgradeSetCanBuy({ upgradeId:upgrade.id, value:canBuy })
                    if (canBuy == true) this.upgradesToBuy += 1
                })
            },
            
            checkBoostsToBuy() {
            
                this.boostsToBuy = 0
                
                this.boosts.forEach(boost => {
                
                    let canBuy = boost.cost <= this.currentGalaxyDarkmatterCount
                    if (canBuy != boost.canBuy) this.boostSetCanBuy({ boostId:boost.id, value:canBuy })
                    if (canBuy == true) this.boostsToBuy += 1
                })
            },
            
            start() {
                
                this.started = true
                
                const self = this
                this.rafHandle = requestAnimationFrame(function(timestamp) {
                    
                    self.frameDelta = 0                    
                    self.lastFrameTimeMs = timestamp
                    
                    self.rafHandle = requestAnimationFrame(self.update)
                })
            },
            
            update(timestamp) {
                
                if (this.started == false) return
                
                if (this.currentFleet == null) {
                
                    if (this.currentGalaxy.endTime == null) this.galaxySetEndTime({ galaxyId:this.currentGalaxyId, value:(new Date().getTime()) })
                    this.started = false
                    return
                }
                
                this.rafHandle = requestAnimationFrame(this.update)
                
                if (this.tagOnPrestige == true) {
                
                    this.galaxyPrestige({ galaxyId:this.currentGalaxyId, darkmatter:this.potentialDarkmatter })
                    
                    this.fleetReset({ galaxyId:this.currentGalaxyId })
                    this.shipReset({ galaxyId:this.currentGalaxyId })
                    this.upgradeReset({ galaxyId:this.currentGalaxyId })
                    this.boostReset({ galaxyId:this.currentGalaxyId })
                    this.objectiveReset({ galaxyId:this.currentGalaxyId })
                    
                    this.currentFleetLife = this.currentFleet.life.current
                    
                    this.tagOnPrestige = false
                    
                    this.save()
                }
                
                this.frameDelta += timestamp - this.lastFrameTimeMs
                if (this.frameDelta < 1000) return
                
                let shots = (this.frameDelta / 1000)
                
                let damages = 0
                this.ships.forEach(ship => {
                
                    damages += shots * ship.damage.base * ship.count * ship.damage.modifier * (1 + (this.currentGalaxy.darkmatterCount * this.currentGalaxy.darkmatterCoeff))                    
                })
                
                while(damages > 0) {
                
                    if (this.currentFleet == null) break
                    
                    let realDamages = Math.min(damages, this.currentFleetLife)
                    damages -= realDamages
                    
                    this.currentFleetLife -= realDamages
                    
                    this.galaxySetCreditCount({ galaxyId:this.currentGalaxyId, value:this.currentGalaxy.creditCount + realDamages })
                    this.galaxySetTotalDamagesAll({ galaxyId:this.currentGalaxyId, value:this.currentGalaxy.totalDamages.all + realDamages })
                    this.galaxySetTotalDamagesCurrent({ galaxyId:this.currentGalaxyId, value:(this.currentGalaxy.totalDamages.current + realDamages) })
                    
                    if (this.currentFleetLife <= 0) {
                        
                        this.fleetSetLife({ fleetId:this.currentFleet.id, value:0 })
                        
                        let nextId = this.fleetNextId(this.currentFleet.id)
                        this.galaxySetCurrentFleetId({ galaxyId:this.currentGalaxyId, value:nextId })     
    
                        this.currentFleetLife = this.currentFleet.life.current
                    }
                }
                
                this.frameDelta = 0
                this.lastFrameTimeMs = timestamp
            },
            
            onManualFire() {
            
                if (this.currentFleet == null) return
                
                this.manualFire = true

                const self = this
                setTimeout(function() { self.manualFire = false }, 500)
                
                this.currentFleetLife -= this.manualDps
                
                this.galaxySetCreditCount({ galaxyId:this.currentGalaxyId, value:this.currentGalaxy.creditCount + this.manualDps })
                this.galaxySetTotalDamagesAll({ galaxyId:this.currentGalaxyId, value:this.currentGalaxy.totalDamages.all + this.manualDps })
                this.galaxySetTotalDamagesCurrent({ galaxyId:this.currentGalaxyId, value:this.currentGalaxy.totalDamages.current + this.manualDps })
                
                if (this.currentFleetLife <= 0) {
                    
                    this.fleetSetLife({ fleetId:this.currentFleet.id, value:0 })
                    
                    let nextId = this.fleetNextId(this.currentFleet.id)
                    this.galaxySetCurrentFleetId({ galaxyId:this.currentGalaxyId, value:nextId })

                    this.currentFleetLife = this.currentFleet.life.current                    
                }
            },
            
            onChangeBuildAmount(amount) {
            
                this.galaxySetBuildAmount({ galaxyId:this.currentGalaxyId, value:amount })
            },
            
            onReset() {
                
                this.started = false
                
                this.galaxyReset({ galaxyId:this.currentGalaxyId })
                this.fleetReset({ galaxyId:this.currentGalaxyId })
                this.shipReset({ galaxyId:this.currentGalaxyId })
                this.upgradeReset({ galaxyId:this.currentGalaxyId })
                this.boostReset({ galaxyId:this.currentGalaxyId })
                this.objectiveReset({ galaxyId:this.currentGalaxyId })
                
                this.currentFleetLife = this.fleetById(this.currentGalaxy.currentFleetId).life.current
                
                this.save()                
            },
            
            onClaim() {
            
                if (this.currentObjective.modifier.type == 'darkmatter') this.galaxyApplyModifier(this.currentObjective.modifier)
                else this.shipApplyModifier(this.currentObjective.modifier)
                
                this.objectiveSetCount({ objectiveId:this.currentObjective.id, value:1 })                
            },
            
            onPrestige() {
            
                this.tagOnPrestige = true
            },
            
            onBuyAllUpgrades() {
            
                this.upgrades.forEach(upgrade => {
                
                    if (upgrade.cost <= this.currentGalaxyCreditCount) {
                    
                        this.upgradeSetCount({ upgradeId:upgrade.id, value:1 })
                        this.galaxySetCreditCount({ galaxyId:this.currentGalaxyId, value:this.currentGalaxyCreditCount - upgrade.cost })
                        
                        if (upgrade.modifier.type == 'darkmatter') this.galaxyApplyModifier(upgrade.modifier)
                        else this.shipApplyModifier(upgrade.modifier)
                    }
                })
            },
            
            onBuyAllBoosts() {
            
                this.boosts.forEach(boost => {
                
                    if (boost.cost <= this.currentGalaxyDarkmatterCount) {
                    
                        this.boostSetCount({ boostId:boost.id, value:1 })
                        this.galaxySetDarkmatterCount({ galaxyId:this.currentGalaxyId, value:this.currentGalaxyDarkmatterCount - boost.cost })
                        
                        if (boost.modifier.type == 'darkmatter') this.galaxyApplyModifier(boost.modifier)
                        else this.shipApplyModifier(boost.modifier)
                    }
                })
            },
            
            onChangeGalaxy(newGalaxyId) {
                
                if (newGalaxyId == this.currentGalaxy.id) return
                                
                this.setCurrentGalaxyId({ value:newGalaxyId })
                
                this.save()
                this.start()
            },
        },
        
        created() { 
            
            if (this.currentGalaxy.loaded == false) {
            
                window.location.href = '/'
                return
            }
            
            this.loaded = true
            
            if (this.currentGalaxy.startTime == null) {
                
                this.galaxySetStartTime({ galaxyId:this.currentGalaxyId, value:new Date().getTime() })
            }
            
            this.boostsToBuy = 0
            this.upgradesToBuy = 0
            
            if (this.currentFleet) this.currentFleetLife = this.currentFleet.life.current
            
            this.checkBoostsToBuy()
            this.checkUpgradesToBuy()
            
            this.start()
            
            this.saveInterval = setInterval(() => { this.save() }, 30000)
        },
        
        beforeUnmount() {
            
            clearInterval(this.saveInterval)
            
            cancelAnimationFrame(this.rafHandle)
        },
    }
</script>
