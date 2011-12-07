if (namespace == "undefined") {
    /**
     * @param string ns_string namespaces string separated by dots .
     * 
     * @return object namespace object
     */
    var namespace = function namespace(ns_string)
    {
        var parts = ns_string.split('.'),
            parent = window;

        //strip redundant leading global
        if (parts[0] === 'window')
        {
            parts = parts.slice(1);
        }

        for(var i = 0; i<parts.length; i++)
        {
            // create a property if it doesn't exist
            if(typeof parent[parts[i]] == "undefined")
            {
                parent[parts[i]] = {};
            }

            parent = parent[parts[i]];
        }

        return parent;
    };
}
