describe("LinkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = new LinkedList();
  });

  describe(".first", function() {
    it("returns the value of the first node of the list", function() {
      linkedList.add(1,2);
      expect(linkedList.first().value).toEqual(2);
    });

//     it("returns null if there is no first node", function() {
//       expect(linkedList.first()).toBeNull();
//     });
  });
  
  describe(".last", function() {
//     it("returns the value of the last node of the list", function() {
//       linkedList.add(1,'pickles');
//       linkedList.add(2,'herring');
//       expect(linkedList.last().value).toEqual('herring');
//     });

//     it("returns null if there is no last node", function() {
//       expect(linkedList.last()).toBeNull();
//     });
  });

  describe(".add", function() {
//     it("adds an node to the list", function() {
//       expect(linkedList.length).toEqual(0);
//       linkedList.add(2,'red');
//       linkedList.add(3,'blue');
//       linkedList.add("a string",'green');
//       expect(linkedList.first().key).toEqual(2);
//       expect(linkedList.last().key).toEqual("a string");
//       expect(linkedList.length).toEqual(3);
//     });
  });

  describe(".find", function() {
//     it("returns null if the node is not in the list", function() {
//       expect(linkedList.find(178)).toBeNull();
//     });

//     it("searches for a key and returns the value", function() {
//       linkedList.add("small","mouse");
//       linkedList.add("medium","rhino");
//       linkedList.add("large","elephant");
//       expect(linkedList.find("medium")).toBe("rhino");
//     });
  });

  describe(".remove", function() {
//     it("removes the specified node from the list", function() {
//       linkedList.add("red","fish");
//       linkedList.add("blue","whale");
//       linkedList.add("green","turtle");

//       linkedList.remove("blue");

//       expect(linkedList.find("blue")).toBeNull();
//       expect(linkedList.length).toEqual(2);
//       expect(linkedList.find("green")).toEqual("turtle");
//     });

//     it("properly removes the first node", function() {
//       linkedList.add(1,"fish");
//       linkedList.add(2,"huge alligator");
//       linkedList.remove(1);
//       expect(linkedList.first().value).toEqual("huge alligator");
//       expect(linkedList.length).toEqual(1);
//     });

//     it("properly removes the last node", function() {
//       linkedList.add("first", "among equals");
//       linkedList.add("last", "to be picked for sports");
//       linkedList.remove("last");
//       expect(linkedList.length).toEqual(1);
//       expect(linkedList.last().key).toEqual("first");
//       expect(linkedList.first()).toEqual(linkedList.last());
//     });

//     it("does nothing if the element cannot be found", function() {
//       linkedList.add("red","fish");
//       linkedList.add("blue","whale");
//       linkedList.add("green","turtle");

//       linkedList.remove("chartreuse");

//       expect(linkedList.find("red")).toEqual("fish");
//       expect(linkedList.find("blue")).toEqual("whale");
//       expect(linkedList.find("green")).toEqual("turtle");
//       expect(linkedList.length).toEqual(3);
//     });
  });
});
