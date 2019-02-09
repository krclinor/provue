<template>
	<div>
		<div class="text-center m-2"
			v-if="displayWarning">
			<h5 class="bg-danger text-white p-2">
				Are you sure?
			</h5>
			<button class="btn btn-danger"
				@click="doNavigation">
				Yes
			</button>
			<button class="btn btn-danger"
				@click="cancelNavigation">
				Cancel
			</button>
		</div>
		<h4 class="bg-info text-white text-center p-2">
			Preferences
		</h4>
		<div class="form-check">
			<input type="checkbox" class="form-check-input"
				:checked="primaryEdit" @input="setPrimaryEdit">
			<label class="form-check-label">Primary Color for Edit Buttons</label>
		</div>
		<div class="form-check">
			<input type="checkbox" class="form-check-input"
				:checked="dangerDelete" @input="setDangerDelete">
			<label class="form-check-label">Danger Color for Delete Buttons</label>
		</div>
	</div>
</template>
<script>
import {mapState} from "vuex"

export default {
	data(){
		return {
			displayWarning: false,
			navigationApproved: false,
			targetRoute: null
		}
	},
	computed:{
		...mapState({
			primaryEdit: state => state.prefs.primaryEditButton,
			dangerDelete: state => state.prefs.dangerDeleteButton
		})
	},
	methods:{
		setPrimaryEdit(){
			this.$store.commit("setEditButtonColor", !this.primaryEdit)
		},
		setDangerDelete(){
			this.$store.commit("setDeleteButtonColor", !this.dangerDelete)
		},
		doNavigation(){
			this.navigationApproved = true
			this.$router.push(this.targetRoute.path)
		},
		cancelNavigation(){
			this.navigationApproved = false
			this.displayWarning = false
		}
	},
	beforeRouteLeave(to, from, next){
		if(this.navigationApproved){
			next()
		}else{
			this.targetRoute = to
			this.displayWarning = true
			next(false)
		}
	}
}
</script>

