import React from "react";
//import Card from 'react-bootstrap/Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 const dummyList = [
        {
            "id": 1,
            "title": "Avatar",
            "distributor": "20th Century Fox",
            "year": 2009,
            "amount": "$2,787,965,087",
            "img": {
                "src": "media/avatar.jpg",
                "alt": "avatar"
            },
            "ranking": 1
        },
        {
            "id": 2,
            "title": "Titanic",
            "distributor": "20th Century Fox",
            "year": 1997,
            "amount": "$2,187,463,944",
            "img": {
                "src": "media/titanic.jpg",
                "alt": "titanic"
            },
            "ranking": 2
        },
        {
            "id": 3,
            "title": "Star Wars: The Force Awakens",
            "distributor": "Walt Disney Studios Motion Pictures",
            "year": 2015,
            "amount": "$2,068,223,624",
            "img": {
                "src": "media/star_wars_the_force_awakens.jpg",
                "alt": "star_wars_the_force_awakens"
            },
            "ranking": 3
        },
        {
            "id": 4,
            "title": "Avengers: Infinity War",
            "distributor": "Walt Disney Studios Motion Pictures",
            "year": 2018,
            "amount": "$2,048,359,754",
            "img": {
                "src": "media/avengers_infinity_war.jpg",
                "alt": "avengers_infinity_war"
            },
            "ranking": 4
        },
        {
            "id": 5,
            "title": "Jurassic World",
            "distributor": "Universal Pictures",
            "year": 2015,
            "amount": "$1,671,713,208",
            "img": {
                "src": "media/jurassic_world.jpg",
                "alt": "jurassic_world"
            },
            "ranking": 5
        }
    ];

const List = () => {

    //console.log(props);
   
    const [listData, setListData] = React.useState(dummyList);
    //console.log(listData);
    //console.log(listData[0].img.src)

    // listData.map((data) => {
    //     console.log(data.title);
    // })

  return (
    <div className="container">
      <div className="row">
        {listData.map((data) => {
          // console.log(data.img.src);
          return (
            <div className="col">
              <div className="card my-4">
                {/* change width to fit all cards in one row style={{ width: "18rem" }} */}
                <img
                  src="https://picsum.photos/200/300"
                  className="card-img-top"
                  height="350px"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    #{data.id}-{data.title}({data.year})
                  </h5>
                  <p className="card-text"></p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Distributor:</b> {data.distributor}
                  </li>
                  <li className="list-group-item">
                    <b>Amount:</b> {data.amount}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
