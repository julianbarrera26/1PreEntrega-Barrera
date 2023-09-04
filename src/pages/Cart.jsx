import { useEffect, useState } from "react";
import { useCartContext } from "../state/Cart.context";
import { addOrder } from "../libreria/orders";
import { updateManyBooks } from "../libreria/productos";
import { Alert } from "bootstrap";

export const Cart = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [email2Error, setEmail2Error] = useState("");

    const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();

    const createOrder = async () => {
        
        const items = cart.map(({ id, title, qty, precio }) => ({
            id,
            title,
            qty,
            precio,
        }));

        const order = {
            buyer: { name, phone, email, email2 },
            items,
            total: getTotalPrice,
        };

        const id = await addOrder(order);
        alert (id);

        await updateManyBooks(items);


        cleanCart();

    };
        
        const handlePhoneChange = (e) => {
          const value = e.target.value;
          const numericValue = value.replace(/\D/g, '');
          setPhone(numericValue);
      
          // Validación del número de teléfono
          if (value.length < 10) {
            setPhoneError('El número de teléfono debe tener al menos 10 dígitos');
          } else {
            setPhoneError('');
          }
        };
      
        const handleEmailChange = (e) => {
          const value = e.target.value;
          setEmail(value);
      
          // Validación del correo electrónico
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          if (!emailRegex.test(value)) {
            setEmailError('Correo electrónico no válido');
          } else {
            setEmailError('');
          }
        };

        const handleConfirmEmailChange = (e) => {
          const value = e.target.value;
          setEmail2(value);
      
          // Validación del correo electrónico repetido
          if (value !== email) {
            setEmail2Error('Los correos electrónicos no coinciden');
          } else {
            setEmail2Error('');
          }
        };
      
        const handleNameChange = (e) => {
          const value = e.target.value;
          setName(value);
      
          // Validación del nombre 
          if (value.length < 6) {
            setNameError('El nombre debe tener al menos 6 caracteres');
          } else {
            setNameError('');
          }
        };

       

    return (
      <div className="cart">
      <div className="container cart__container">
        {cart.length ? (
          <>
            <div className="cart__item" style={{ border: "none" }}>
              <button className="cart__item-button" onClick={cleanCart}>
                Vaciar carrito
              </button>
            </div>
            <div className="cart__products">
              <div
                className="cart__item"
                style={{ border: "none", padding: "0 16px" }}
              >
                <span>Producto</span>
                <span>Cantidad</span>
                <span>Precio</span>
                <span>Subtotal</span>
              </div>
              {cart.map((item) => (
                <div className="cart__item" key={item.id}>
                  <span>{item.title}</span>

                  <span>{item.qty}</span>
                  <span>
                    $
                    {item.precio.toLocaleString("es-CO", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })}
                  </span>
                  <span>
                    $
                    {(item.qty * item.precio).toLocaleString("es-AR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })}
                  </span>
                  <button
                    className="cart__item-delete"
                    onClick={() => removeProduct(item.id)}
                  >
                  </button>
                </div>
              ))}
            </div>
            <div className="cart__item" style={{ border: "none" }}>
              <div className="cart__total">
                <span>Total</span>{" "}
                <span>
                  $
                  {getTotalPrice.toLocaleString("es-AR", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>{" "}
            </div>
            <div className="form">
              <div>
                <span>Nombre</span>
                <input type="text"
                  value={name}
                  className="form__input"
                  placeholder="Nombre"
                  onChange={handleNameChange}
                />
                {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
              </div>
              <div>
                <span>Correo</span>
                <input type="text" 
                value={email}
                  className="form__input"
                  placeholder="Correo"
                  onChange={handleEmailChange}/>
                  {emailError && <p style={{ color: 'red' }}>{emailError}</p>}  
                </div>
              <div>
                <span>Repetir correo</span>
                <input
                  value={email2}
                  className="form__input"
                  placeholder="Repetir correo"
                  onChange={handleConfirmEmailChange}/>
                {email2Error && <p style={{ color: 'red' }}>{email2Error}</p>}
              </div>
              <div>
                <span>Teléfono</span>
                <input
                value={phone}
                  className="form__input"
                  placeholder="Teléfono"
                  onChange={handlePhoneChange}/>
                {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
              </div>
              <button
                className="cart__item-button form__button"
                onClick={createOrder}
              >
                Realizar pedido
              </button>
            </div>
          </>
        ) : (
          <h1>EL carrito esta vacio</h1>
        )}
        </div>
    </div>
  );
};