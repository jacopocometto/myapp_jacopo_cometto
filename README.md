

L'applicazione parte lanciando da terminale, dalla cartella di lavoro myapp, il comando "npm start".
Il server è accessibile alla porta 5000, e le risorse(i post) sono disponibili su 

                                        localhost:5000/posts/

Di seguito un elenco delle funzionalità con indicate, per ciascuna di esse, il tipo di chiamata e la rotta da utilizzare, identificata dalla URI.

**LISTA DEI POST PUBBLICI:

    Request     URI
    GET         /posts/public



**LISTA DI TUTTI POST:

    Request     URI
    GET         /posts/



**SHOW DI UN POST SPECIFICO:

    Request     URI
    GET         /posts/:postId



**CREAZIONE DI UN POST:

    Request     URI
    POST        /posts/

N.B. In fase di creazione di un post, il body della request deve essere un JSON così strutturato:

                            {
                                "title" : "...",
                                "body" : "...",
                                "hashtags" : ["ciao", "questoèunhashtag","...",...]
                            }
Gli hashtag devono essere inseriti nell'array senza il carattere "#" all'inizio.
                                               
Ai campi "author", e "status" vengono assegnati di default i valori "Brian Fox" e "draft". Pubblicando un post lo stato viene modificato in "public".



**PUBBLICARE UN POST:

    Request     URI
    PATCH       /posts/:postId/publish

L'id del post da pubblicare può essere recuperato:

- dalla lista di tutti i post ( GET /posts/ )
- nel dettaglio del post ( GET /posts/:postId )



**CANCELLARE UN POST

    Request     URI
    DELETE      /posts/:postId

l'id del post da cancellare può essere recuperato:

- dalla lista di tutti i post ( GET /posts/ )
- nel dettaglio del post (GET /posts/:postId)
- dalla lista dei post pubblici ( GET /posts/public )



**RICERCA POST TRAMITE HASTAG

    Request     URI
    GET         /posts/tags/:hashtags

Per filtrare i post, se la ricerca è fatta su più hastag, questi vanno inseriti nella URI separati dal carattere "-". Non va invece inserito nella URI il carattere "#". Affinchè il tutto funzioni, in fase di creazione del post, dal front end deve arrivare una richiesta contenente un array di hashtag privi del carattere "#".

Esempio: per ricercare i post contenenti gli hashtag #crescita, #formazione, #benessere, scriveremo

                    localhost:5000/posts/tags/crescita-formazione-benessere
__