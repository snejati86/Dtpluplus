
/* Constructors */ 
function LinkedList() {
    this.length = 0 ;
    this.head = null;
    this.tail = null;
}

function Node(key, value) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
}

/* LinkedList Member Functions */

LinkedList.prototype.add = function (key, value) {
    var newnode = new Node(key, value);
    if (this.length < 1) {
        this.head = newnode;
        this.tail = newnode;
    }
    else {
        this.tail.nextNode = newnode;
        this.tail = newnode;
    }
    this.length++; 
}

LinkedList.prototype.remove = function (key) {
    if (this.length < 1) {
        return false;
    }
    else {
        if (this.head.key == key) {
            this.head = this.head.nextNode;
            this.length--;
            return true;
        }
        var prev = this.head;
        var current = this.head.nextNode;
        while (current != null) {
            if (current.key == key) {
                prev.nextNode = current.nextNode;
                this.length--;
                if (current.nexNode == null) {
                    this.tail = prev;
                }
                return true;
            }
            current = current.nextNode;
            prev = prev.nextNode;
        }
        return false;
    }
}

LinkedList.prototype.removeLast = function () {
    if (this.length < 1) {
        return;
    }
    else {
        var prev = this.head;
        var current = this.head.nextNode;
        while (current.value != null) {
            current = current.nextNode;
            prev = prev.nextNode;
        }
        this.tail = prev;
        this.length--;
    }
}
        
LinkedList.prototype.removeFirst = function () {
        if (this.length < 1) {
            return;
        }
        else {
            this.head = this.head.nextNode;
        }
        this.length--;
    }

LinkedList.prototype.first = function () {
        return this.head;
}

LinkedList.prototype.last = function () {
    return this.tail;
}

 LinkedList.prototype.find = function (key) {
        if (this.length < 1) {
            return null;
        }
        else
        {
            var current = this.head;
            while(current!=null)
            {
                if(current.key==key)
                {
                    return current.value;
                }
                current=current.nextNode;
            }
            return null;
        }
    }



