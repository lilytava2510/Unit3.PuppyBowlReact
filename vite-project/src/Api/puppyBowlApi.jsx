import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
    reducerPath: "puppyBowlApi",
    baseQuery:
    fetchBaseQuery({
        baseUrl: 'https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT',
        prepareHeaders(headers){
          headers.set('Content-type', 'application/json');
          return headers;
        },
    }),
    endpoints: (builder) => ({
        fetchPlayers: builder.query({
             query: () => '/players',
        }),
        getPuppy: builder.query({
            query: (playerid) => `/players/${playerid}`,
            
        }),

        createPlayer: builder.mutation({
            query: ({name, breed}) => ({
                url: '/players',
                method: 'POST',
                body:({name,breed})
            })
        }),
        updatePlayer: builder.mutation({
            query: (player) => ({
                url: `/players/${player.id}`,
                method: 'PATCH',
                body: player
            })
        }),
        deletePlayer: builder.mutation({
            query: ({id}) => ({
                url: `/players/${id}`,
                method: 'DELETE',
                body: id
            })
    }),
})
});

export const { useFetchPlayersQuery, useCreatePlayerMutation, useGetPuppyQuery, useUpdatePlayerQuery, useDeletePlayerQuery } = puppyBowlApi;



