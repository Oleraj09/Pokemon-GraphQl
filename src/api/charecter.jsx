import React from 'react'
import { useQuery, gql } from "@apollo/client";
const GET_LOCATIONS = gql`
query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    results {
      id
      url
      name
      image
    }
  }
}
`;

const gqlVariables = {
  limit: 10,
  offset: 1,
};
function charecter() {
  const Pokemonlist = () => {
    const { loading, error, data: { pokemons = [] } = {} } = useQuery(GET_LOCATIONS, { variables: gqlVariables });
    if (loading)
      return <div>
        <div className="preloader d-flex">
          <h3 className='text-success'>Loading Information....</h3>
        </div>
      </div>;
    if (error) return <p>Error : {error.message}</p>;
    // console.log(pokemons);
    return (
      <div className="row row-cols-lg-5 row-cols-md-3">
        {
          pokemons.results.map((data,i) => {
            return (

              <div className="col py-3">
                <div className="card">
                  <div className="card-body">
                    <a key={i} className="nolink" href={data.id}>
                      <div className="c-image">
                        <img key={i} src={data.image} alt="" />
                      </div>
                      <div className="c-info">
                        <h5 key={i} className="card-title">{data.name}</h5>
                        <button className="mybutton g px-3 py-0 me-2 rounded-1">Grass</button>
                        <button className="mybutton w px-3 py-0 rounded-1">Water</button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
  return (
    <div>
      <Pokemonlist />
    </div>
  )
}
export default charecter;