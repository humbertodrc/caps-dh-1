import { characters } from '../../data';
import Picture from '../Picture';

const ListPicture = () => {



  return (
    <section>
      {characters.map((character: any) => (
        <div key={character.id}>
          <Picture character={character} />
        </div>
      ))}
    </section>
  );
};

export default ListPicture;
