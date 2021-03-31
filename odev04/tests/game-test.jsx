const React = require('react');
const { mount } = require('enzyme');
const {Game}  = require('../src/game');

test('kart sayısı', () =>{

    const driver = mount(<Game/>);

    const kart = driver.find('.kart');
    expect(kart.length).toBe(3);

});

test('kart seçme', () =>{

    const driver = mount(<Game/>);
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(0);
    let srcName = card.find("img").prop("src");

    expect(srcName === 'img/Kedi.jpg' || srcName === 'img/Kopek.jpg').toBeTruthy();

});

test('durum mesajı', () =>{

    const driver = mount(<Game/>);
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(0);
    let durum = card.find("p");

    expect(durum).toBeDefined();
});

test('yeni oyun', () =>{

    const driver = mount(<Game/>);
    let card = driver.find('.kart').at(0);
    card.simulate('click');
    card = driver.find('.kart').at(0);

    let link = driver.find('.link');
    link.simulate('click');
    link = driver.find('.link');
    link = link.find("span");

    expect(link).toBeDefined();
});