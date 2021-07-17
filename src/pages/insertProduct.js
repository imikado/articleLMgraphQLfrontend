import React,{ useState } from 'react';

function InsertProduct(props) {
    
    const [isFormAddVisible,setFormAddVisible]=useState(false);
    
    const formAdd=()=>{
        if( isFormAddVisible){

            return (
            <div className="popup">
                <form onSubmit={e => {
                    e.preventDefault();

                    let formInput=e.target.elements;

                    let myProductToAdd={
                        "name":formInput.name.value,
                        "price":formInput.price.value,
                        "category":formInput.category.value
                    };
                    
                    e.target.reset();

                    props.callInsertProduct({ variables: { input: myProductToAdd } });

                    setFormAddVisible(false);
                    
                    }}>
                    <h2>Ajouter produit</h2>
                    <p>
                        <label>Nom</label>
                        <input type="text" name="name" />
                    </p>
                    <p>
                        <label>Prix</label>
                        <input type="text" name="price"/>
                    </p>
                    <p>
                        <label>Catégorie</label>
                        <input type="text" name="category" />
                    </p>
                    <p class="center"><a href="#" onClick={()=>setFormAddVisible(false)}>annuler</a> <input type="submit" value="Ajouter" /></p>

                    <p class="center"></p>
                </form>
            </div>);
        }else{
            return null;
        }
        
    }

    const displayForm= () =>{
        setFormAddVisible(true);
    }
    
    return (
        <div style={{"clear":"both"}}>
            {formAdd()}
            <p><input type="button" onClick={displayForm} value="Ajouter produit"/></p>
        </div>
    );
    
  }
  
  export default InsertProduct;