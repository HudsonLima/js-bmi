/* describe('BMIService',function() {
        
   it('Should calculate the BMI given a weight and height: ',function(){
       
     expect(BMIService.getIndex(88, 1.70)).tobe(25.88235294117647);
   });  
    
     it('sould return null for a non valid number:',function() {
     expect(BMIService.getIndex('1', '')).tobe(null);
     });
});*/


 describe('BMIService', function() {
	
	it('should calucalte the BMI given a weight and height', function () {
		//expect(BMIService.getIndex(75, 1.71)).toBe(25.64891761567662);
          expect(BMIService.getIndex(88, 1.70)).toBe(30.449826989619382);
	});
	
	it('should return null for a non valid number', function () {
		expect(BMIService.getIndex(1, '2')).toBe(null);
	});
	
}); 