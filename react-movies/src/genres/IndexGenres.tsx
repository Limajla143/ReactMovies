import { urlGenres } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { genreDto } from "./genre.model";

export default function IndexGenres() {

    return (
        <>
           <IndexEntity<genreDto> url={urlGenres} createUrl="genres/create" title="Genres" entityName="Genre">

                {(genres, buttons) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>                       
                    </thead>
                    <tbody>
                        {genres?.map(genre => 
                            <tr key={genre.id}>
                                <td>
                                    {buttons(`genres/edit/${genre.id}`, genre.id)}  
                                </td>
                                <td>
                                    {genre.name}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </>}
                
           </IndexEntity>
            
           
        </>
    )
}