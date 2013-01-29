var projectile : Rigidbody;
var power : float;

function Update () {
	if (Input.GetButtonDown("Fire1")){
		var clone : Rigidbody;
		clone = Instantiate(projectile, transform.position, transform.rotation);
		clone.velocity = transform.TransformDirection (Vector3.forward * power);
		//add timed object destructor
		
		//function OnTriggerEnter (other : Collider){ Destroy(other.gameObject);
	}
}