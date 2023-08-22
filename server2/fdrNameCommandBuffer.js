module.exports={
    PrepareFdrNameCommandBuffer:function(){
        var buffer=Buffer.alloc(1280);
        
        //Initialize all value to 0
        buffer.fill(0);

        //Type
        buffer.fill(0x01,0,1);
        buffer.fill(0x00,1,2);

        //Version
        buffer.fill(0x00,2,3);
        buffer.fill(0x00,3,4);

        //Command Number
        buffer.fill(0x20,4,5);
        buffer.fill(0x27,5,6);

        //Execution result
        buffer.fill(0x00,6,7);
        buffer.fill(0x00,7,8);


        //Size
        buffer.fill(0x00,8,9);
        buffer.fill(0x04,9,10);
        buffer.fill(0x00,10,11);
        buffer.fill(0x00,11,12);

        //Parameter-1
        buffer.fill(0x00,12,13);
        buffer.fill(0x00,13,14);
        buffer.fill(0x00,14,15);
        buffer.fill(0x00,15,16);

        //Parameter-2
        buffer.fill(0x00,16,17);
        buffer.fill(0x00,17,18);
        buffer.fill(0x00,18,19);
        buffer.fill(0x00,19,20);

        //Machine Serial Id
        buffer.fill('Y30001',28,34);
        return buffer;
    },
    PrepareWrongCommandBuffer:function(){
        var buffer=Buffer.alloc(1280);
        return buffer;
    }
}

