var target : GameObject;

function OnTriggerEnter (other : Collider) {
	if(other.CompareTag("Player")){
	}
else {
	Destroy(other.gameObject);
	target.animation.Play();
	}
}