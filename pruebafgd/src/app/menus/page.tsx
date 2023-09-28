"use client"
import { useEffect, useState } from 'react';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function cargarMenus() {
      try {
        const res = await fetch('http://localhost:3000/menus');
        if (!res.ok) {
          throw new Error('Error de red o servidor');
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    cargarMenus();
  }, []);

  async function deletemenu(id){
    await fetch(`http://localhost:3000/menus/${id}`, {method: "DELETE"})
  }

  return (
    <>
      <h5 className='title1'>Menús</h5>

      <div className="containerMenus">
        {data.map((menu) => (
          <div key={menu.id}>
            <h5>{menu.id}. {menu.nombre}</h5>
            <p>Descripción: {menu.descripcion}</p>
            <button onClick={() => deletemenu(menu.id)}>Eliminar menu</button>
          </div>
        ))}
      </div>

    </>
  );
};

export default Page;