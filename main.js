// window.onload = function(){
    let observer = new MutationObserver(mutations=>{
        mutations.forEach((mutation)=>{
            console.log(mutation);
            if(mutation.addedNodes.length > 0){
                const rollName = mutation.addedNodes[0]?.querySelector('h3').textContent;
                const traitRoll = mutation.addedNodes[0]?.querySelector('.sheet-trollLeft');
                const wildRoll = mutation.addedNodes[0]?.querySelector('.sheet-trollRight');
                const rolls = [traitRoll, wildRoll]

                let results = '';
                rolls.forEach(roll=>{
                    const label = roll.querySelector('.sheet-rollLabel').textContent;
                    const rollResult = roll.querySelector('.inlinerollresult').textContent;
                    results = `::: ${results} ${label} ${rollResult}`
                })
                result = `${rollName} ${results}`

                console.log(result);
            } else {
                return;
            }
        })
    })

    observer.observe(document.querySelector('#textchat > .content'), {
        childList : true
    });
// }