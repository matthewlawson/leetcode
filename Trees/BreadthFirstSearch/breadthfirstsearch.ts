class GraphNode {
    value: string;
    adjacent: GraphNode[];
    visited: boolean;
}


export function search(root: GraphNode) {
    const queue = new Queue();
    root.visited = true;
    queue.enqueue(root);

    while(!queue.isEmpty()) {
        let frontNode = queue.dequeue() as GraphNode;
        // Process the node ,,,
        console.log(frontNode.value);
        for(let node of frontNode.adjacent) {
            if(!node.visited) {
                node.visited = true;
                queue.enqueue(node);
            }
        }
    }

}


class Queue {
    data= [];
    top: number;
    constructor (data:[] = []) {
      this.data = data;
      this.top = data.length;
    }

    enqueue<T>(item: T): void {
      this.data[this.top] = item;
      this.top++;
    }

    dequeue<T> ():T {
      this.top --;
      // TODO - remove any native array operators
      return this.data.shift();
    }

    peek<T>(): T {
      return this.data[0];
    }

    size(): number {
      return this.top;
    }

    isEmpty(): boolean {
        return this.top == 0;
    }

  }
