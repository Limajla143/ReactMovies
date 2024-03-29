import { urlMovieTheaters } from "../endpoints";
import EditEntity from "../utils/EditEntity";
import { movieTheaterCreationDTO, movieTheaterDTO } from "./movieTheater.model";
import MovieTheaterForm from "./movieTheaterForm";

export default function EditMovieTheater() {
    return (
        <EditEntity<movieTheaterCreationDTO, movieTheaterDTO>
            url={urlMovieTheaters} indexUrl="/movieTheaters" entityName="Movie Theater">

            {(entity, edit) => 
                <MovieTheaterForm model={entity}
                    onSubmit={async values => await edit(values)}
                />
            }
        </EditEntity>
    )
}