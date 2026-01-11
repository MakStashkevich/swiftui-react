
import SwiftUI

struct ZStackExamplesView: View {
    var body: some View {
        List {
            ZStack {
                Rectangle()
                    .fill(Color.red)
                    .frame(width: 100, height: 100)
                Text("Front")
                    .foregroundColor(.white)
            }
            .navigationTitle("Default ZStack")
            
            ZStack(alignment: .bottomTrailing) {
                Rectangle()
                    .fill(Color.blue)
                    .frame(width: 150, height: 150)
                Text("Bottom Trailing")
                    .foregroundColor(.white)
                    .padding(5)
                    .background(Color.black.opacity(0.7))
                    .cornerRadius(5)
            }
            .navigationTitle("Styled ZStack")
        }
        .navigationTitle("ZStack Examples")
    }
}

struct ZStackExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        ZStackExamplesView()
    }
}
