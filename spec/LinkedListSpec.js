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

     it("returns null if there is no first node", function() {
       expect(linkedList.first()).toBeNull();
     });
  });
  
  describe(".last", function() {
     it("returns the value of the last node of the list", function() {
       linkedList.add(1,'pickles');
       linkedList.add(2,'herring');
       expect(linkedList.last().value).toEqual('herring');
     });

     it("returns null if there is no last node", function() {
       expect(linkedList.last()).toBeNull();
     });
  });

  describe(".add", function() {
     it("adds an node to the list", function() {
       expect(linkedList.length).toEqual(0);
       linkedList.add(2,'red');
       linkedList.add(3,'blue');
       linkedList.add("a string",'green');
       expect(linkedList.first().key).toEqual(2);
       expect(linkedList.last().key).toEqual("a string");
       expect(linkedList.length).toEqual(3);
     });
  });

  describe(".find", function() {
     it("returns null if the node is not in the list", function() {
       expect(linkedList.find(178)).toBeNull();
     });

     it("searches for a key and returns the value", function() {
       linkedList.add("small","mouse");
       linkedList.add("medium","rhino");
       linkedList.add("large","elephant");
       expect(linkedList.find("medium")).toBe("rhino");
     });
  });

  describe(".remove", function() {
     it("removes the specified node from the list", function() {
       linkedList.add("red","fish");
       linkedList.add("blue","whale");
       linkedList.add("green","turtle");

       linkedList.remove("blue");

       expect(linkedList.find("blue")).toBeNull();
       expect(linkedList.length).toEqual(2);
       expect(linkedList.find("green")).toEqual("turtle");
     });

     it("properly removes the first node", function() {
       linkedList.add(1,"fish");
       linkedList.add(2,"huge alligator");
       linkedList.remove(1);
       expect(linkedList.first().value).toEqual("huge alligator");
       expect(linkedList.length).toEqual(1);
     });

     it("properly removes the last node", function() {
       linkedList.add("first", "among equals");
       linkedList.add("last", "to be picked for sports");
       linkedList.remove("last");
       expect(linkedList.length).toEqual(1);
       expect(linkedList.last().key).toEqual("first");
       expect(linkedList.first()).toEqual(linkedList.last());
     });

     it("does nothing if the element cannot be found", function() {
       linkedList.add("red","fish");
       linkedList.add("blue","whale");
       linkedList.add("green","turtle");

       linkedList.remove("chartreuse");

       expect(linkedList.find("red")).toEqual("fish");
       expect(linkedList.find("blue")).toEqual("whale");
       expect(linkedList.find("green")).toEqual("turtle");
       expect(linkedList.length).toEqual(3);
     });
  });

    /* Advanced LinkedList Tests */

  describe(".findmid", function () {
      it("Return the value of the object in the middle of our list", function () {
          expect(linkedList.length).toEqual(0);
          linkedList.add(1, 'One');
          linkedList.add(2, 'Two');
          linkedList.add(3, 'Three');
          linkedList.add(4, 'MID');
          linkedList.add(5, 'Five');
          linkedList.add(6, 'Six');
          linkedList.add(7, 'Seven');
          expect(linkedList.findmid()).toEqual("MID");
      });
  });

  describe(".sort", function () {
      it("Sorts the linked list by KEY values (Keys are numbers)", function () {
          expect(linkedList.length).toEqual(0);
          linkedList.add(4, 'MID');
          linkedList.add(5, 'Five');
          linkedList.add(3, 'Three');
          linkedList.add(1, 'FIRST');
          linkedList.add(7, 'LAST');
          linkedList.add(2, 'Two');
          linkedList.add(6, 'Six');
          linkedList.sort();
          expect(linkedList.first().value).toEqual("FIRST");
          expect(linkedList.last().value).toEqual("LAST");
      });
  });

  describe(".swap", function () {
      it("Swaps two nodes in the linked list using KEY values", function () {
          expect(linkedList.length).toEqual(0);
          linkedList.add(4, 'MID');
          linkedList.add(5, 'TO_BE_LAST');
          linkedList.add(3, 'Three');
          linkedList.add(1, 'FIRST');
          linkedList.add(7, 'LAST');
          linkedList.add(2, 'TO_BE_FIRST');
          linkedList.add(6, 'Six');
          linkedList.swap(5, 2);
          linkedList.remove(4);
          linkedList.remove(6);
          expect(linkedList.first().value).toEqual("TO_BE_FIRST");
          expect(linkedList.last().value).toEqual("TO_BE_LAST");
      });
  });

  describe(".printReverse", function () {
      it("Prints the list in Reverse order", function () {
          expect(linkedList.length).toEqual(0);
          linkedList.add(4, 'Four');
          linkedList.add(5, 'Five');
          linkedList.add(3, 'Three');
          linkedList.add(1, 'First');
          linkedList.add(7, 'Seven');
          linkedList.add(2, 'Two');
          linkedList.add(6, 'Six');
          expect(linkedList.printReverse()).toEqual("Six,Two,Seven,First,Three,Five,Four");
      });
  });

});
