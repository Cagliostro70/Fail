function Start () {

}
//excitement
function Update () {
transform.Translate(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));

Debug.Log(transform.position.x);
}