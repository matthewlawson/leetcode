/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 export function findNumberOfProvinces(isConnected) {
    let parents = [];
    const n = isConnected.length;
    for(let i =0; i < n; i++) {
        parents[i] = i;
    }
    for(let i = 0; i < isConnected.length; i++) {
        for(let j = 0; j < isConnected.length; j++) {
            if(i != j && isConnected[i][j] == 1) {
                // console.log(i, j)
                union(i, j);
            }
        }
    }
    // How many distinct roots do we have??
    let provinces = new Set([...parents]);
    return provinces.size;


    function union(a, b) {

        const rootA = find(a);
        const rootB = find(b);
        if(rootA == rootB) {
            return;
        }
        // console.log(`connect ${rootB} to ${rootA}`);
        parents[b] = rootA;
    }

    function find(node) {
        const parent = parents[node];
        if(parent == node) {
            return parent;
        }
        return find(parent);
    }
};
