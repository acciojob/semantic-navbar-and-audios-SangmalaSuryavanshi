//your code here
describe('Audio Elements Test', () => {
    it('should contain 3 audio elements with correct attributes', () => {
        cy.contains('3 random audios'); // Ensure this text is present

        cy.get('audio') // Get all audio elements
            .should('have.length', 3) // Ensure there are exactly 3 audio elements
            .each(($audio) => {
                cy.wrap($audio).should('have.attr', 'controls'); // Ensure each audio element has controls attribute
            });

        // Verify the src attributes of the audio elements
        const expectedSrcs = [
            'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
            'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
            'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
        ];

        cy.get('audio').then(($audios) => {
            const srcs = $audios.toArray().map(el => el.src);
            expect(srcs).to.deep.equal(expectedSrcs);
        });
    });
});
