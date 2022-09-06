using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    // Movement speed
    public float speed = 2;
    private Rigidbody2D rb;
    // Float force
    public float force = 350;

    // Start is called before the first frame update
    void Start ()
    {
        // Float towards the right
        GetComponent<Rigidbody2D>().velocity = Vector2.right * speed;
    }

    // Update is called once per frame
    void Update()
    {
        // Float
        if(Input.GetKeyDown(KeyCode.Space))
        GetComponent<Rigidbody2D>().AddForce(Vector2.up * force); 
        
    }

    
}

